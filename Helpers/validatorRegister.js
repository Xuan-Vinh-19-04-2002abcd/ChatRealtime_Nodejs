import validator from "validator";
const checkEmail = (email) =>{
    if(!validator.isEmail(email)){
        return false
    }
    return true
}
const checkPassword = (password) =>{

}
export {checkEmail}