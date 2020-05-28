const User = require('./user.model');

const profile = (req,res) => {
    res.status(200).json({data : req.user});
};

const updateProfile = async (req,res) => {
    try {
        const user = await User.findByIdAndUpdate(req.user._id, req.body, {new: true});
        res.status(200).json({data: user})
    } catch (e) {
        console.error(e);
        res.status(400).end()
    }
};

module.exports = {profile, updateProfile};
