const User = require('../resources/User/user.model');
const jwt = require('jsonwebtoken') ;


const secrets =  {
    jwt: process.env.JWT_SECRET,
    jwtExp: '100d'
};

const newToken = user => {
  return jwt.sign({id: user.id}, secrets.jwt, {expiresIn: secrets.jwtExp})
};

const verifyToken = token =>
     new Promise((resolve,reject) => {
            jwt.verify(token, secrets.jwt, (err, payload) => {
                if(err) return reject(err);
                resolve(payload);
            })
    });


const signUp = async (req,res) => {
    if(!req.body.email || !req.body.password || !req.body.firstName || !req.body.lastName || !req.body.Designation){
        return res.status(404).send({message: "Please fill all the fields"})
    }
    try{
        // const user = await User.create(req.body);
        // const token = newToken(user);
        await User.create(req.body);
        return res.status(200).send({status: "successfully"})
    }catch (e) {
        console.log(e);
        return res.status(404).end()
    }
};

const signIn = async (req,res) => {
    if(!req.body.email || !req.body.password){
        return res.status(404).json({message: "Invalid email and password"})
    }
    const user = await User.findOne({email: req.body.email});
    try{
        const match = await user.checkPassword(req.body.password);
        if(!match){
            return res.status(401).json({message: "Invalid email and password"})
        }
        const token = newToken(user);
        return res.status(200).send({token})
    }catch (e) {
        console.log(e);
        return res.status(400).end()
    }
};

const protect = async (req,res,next) => {
   if(!req.headers.authorization) {
       return res.status(401).end()
   }
  const token = req.headers.authorization.split('Bearer ')[1];
  if(!token) return res.status(401).end();

    try{
        const payload = await verifyToken(token);
        const user = await User.findById(payload.id)
            .select('-password')
            .lean() // its a mongoose obj .lean() converted it into json obj or we can do by in line 70
            .exec();
        req.user = user; // req.user = user.toJSON()
        next()
    }catch (e) {
        console.error(e);
        return res.status(401).end()
    }

};

module.exports = {signIn, signUp, protect};
