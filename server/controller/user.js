const User = require("../model/user");
exports.getUser = async (req, res, next)=>{
    const allUser = await User.find().select("name").exec();
    if(allUser.length >= 1){
        return res.status(201).json({
                allUser: allUser,
                message: "All user has been fetched"
        })
    }else{
        return res.status(404).json({
            message: "No user is found"
        })
    }
}