import messageModel from "../Model/messageModel.js";

const createMessage = async (chatId,sendId,text) =>{
    const message = await new messageModel({
        chatId,sendId,text
    }).save()
    return ({message,status:200})
}
const getMessage = async (chatId) => {
    const messages = await messageModel.find({chatId})
    return({messages,status:200})
}

export {createMessage,getMessage}