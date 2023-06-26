import userModel from "../Model/userModel.js";
import {checkEmail} from "../Helpers/validatorRegister.js";
import bcrypt from "bcrypt";
import {createAccessToken, createRefeshToken} from "./tokenService.js";

const loginService = async (email,password) =>{
    let user = await  userModel.findOne({email});
    if (!user) {
        return {error:"Invalid email or password...",status:400}
    }
    const isValidPassword = await bcrypt.compare(password,user.password);
    if(!isValidPassword) {
        return {error:"Invalid email or password...",status:400}
    }
    const accessToken = createAccessToken(user._id);
    const refreshToken = createRefeshToken(user._id);
    return ({accessToken,refreshToken,status:200,user})
}
export default loginService;