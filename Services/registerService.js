import userModel from "../Model/userModel.js";
import bcrypt from 'bcrypt';
import {checkEmail} from "../Helpers/validatorRegister.js";

const register =  async (name,email,password) =>{
    let user = await userModel.findOne({email});
    if (user) {
        return {error:"User with the given email already exist...",status:400}
    }
    if(!name||!email||!password){
        return {error:"All fields are require",status:400}
    }
    if(!checkEmail(email)){
        return {error:"Email must be a valid email...",status:400}
    }
    user = new userModel({name,email,password});
    const  salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password,salt);
    await user.save()
    return ({user,status:200})
}


export {register}