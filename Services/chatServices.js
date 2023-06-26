import chatModel from "../Model/chatModel.js";
const createChat = async (firstId,secondId) => {
    const chat  = await chatModel.findOne({
        members:{$all:[firstId,secondId]},
    })
    if(chat){
        return ({chat,status:200})
    }
    const newChat = new chatModel({
        members: [firstId,secondId]
    })
    const newchat  = await newChat.save();
    return ({newchat,status:200})
}
const findUserChats = async (userId) =>{
    const chats = await chatModel.find({
        members:{$in:[userId]}
    })
    return ({chats,status:200})

}
const findChat = async (firstId,secondId) => {
    const chat  = await chatModel.findOne({
        members:{$all:[firstId,secondId]},
    })

    return ({chat,status:200})
}
export {createChat,findUserChats,findChat}