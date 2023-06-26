import userModel from "../Model/userModel.js";

const findUser = async (userId) =>{
    const user = await userModel.findById(userId);
    return({user,status:200})
}
const getAllUser = async () =>{
    const users = await userModel.find();
    return({users,status:200})
}
export {findUser,getAllUser}