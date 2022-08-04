const User = require("../models/user")

exports.signOut =(req, res)=>{
    res.status(200).json({
        message: "user signout"
    });
};

exports.signUp = (req, res) =>{
    const user = new User(req.body)
    user.save((err, user)=>{
        if(err){
            return res.status(400).json({message: "err in signup"});
        }
        res.json({
            name:user.name,
            email : user.email,
            id : user._id

        });
    });
};