import User from "../models/UserModel.js";

export const verifyUser = async (req, res, next) => {
    if(!req.session.userId){
        return res.status(401).json({ msg : "Unauthorized!" });
     }
     const user = await User.findOne({
         where: {
             uuid: req.session.userId
         }
     });
     if (!user) {res.status(404).json({ msg : "User not found!" })}
     req.user = user.id;
     next();
}