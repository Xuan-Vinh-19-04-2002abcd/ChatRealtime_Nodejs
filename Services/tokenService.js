import jwt from 'jsonwebtoken';

const createAccessToken = (id) =>{
        const  jwtKey = process.env.JWT_SECRET_KEY;
        return jwt.sign({id},jwtKey,{expiresIn: "3h"})
}
const createRefeshToken = (id) =>{
    const  jwtKey = process.env.JWT_SECRET_KEY;
    return jwt.sign({id},jwtKey,{expiresIn: "30d"})
}
export {createRefeshToken,createAccessToken}