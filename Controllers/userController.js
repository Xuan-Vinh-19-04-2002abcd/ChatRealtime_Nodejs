import userModel from "../Model/userModel.js";
import { register} from "../Services/registerService.js";
import loginService from "../Services/loginService.js";
import {findUser, getAllUser} from "../Services/userService.js";
import {response} from "express";
const registerUser = (req,res) => {
    const  {name,email,password} = req.body;
    register(name,email,password).then(
        response =>{
            const {error,user,status} = response;

            if (error) {
                return res.status(status).json({ error });
            }

            return res.status(status).json(user);
        }
    ).catch(error => {
        return res.status(500).json({ error: `Register fail: ${error.message}` });
    });
}
const loginUser = (req,res) =>{
    const  {email,password} = req.body;
    loginService(email,password).then(
        (response)  =>{
            const {error,accessToken,refreshToken,user,status} = response;

            if (error) {
                return res.status(status).json({ error });
            }

            return res.status(status).json({accessToken,refreshToken,user});
        }
    ).catch(error => {
        return res.status(500).json({ error: `Login fail: ${error.message}` });
    });
}

const findUserController = (req,res) =>{
    const {userId} = req.body;
    findUser(userId).then(
        (response) =>{
            return res.status(response.status).json(response.user);
        }
    ).catch(error => {
        return res.status(500).json({ error: `Find not User: ${error.message}` });
    })
}
const getAllUserController = (req,res) =>{
    getAllUser().then(
        (response) =>{
            return res.status(response.status).json(response.users);
        }
    ).catch(error => {
        return res.status(500).json({ error: `Find not User: ${error.message}` });
    })
}
export {registerUser,loginUser,findUserController,getAllUserController}