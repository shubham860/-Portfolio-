const User = require('./user.model');

const profile = async (req,res) => {
    const user = await User.findOne({_id: req.params.id});
    res.status(200).json({data : user,status:"success"});
};

const updateProfile = async (req,res) => {
    try {
        const user = await User.findOneAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({data: user})
    } catch (e) {
        console.error(e);
        res.status(400).end()
    }
};

module.exports = {profile, updateProfile};
