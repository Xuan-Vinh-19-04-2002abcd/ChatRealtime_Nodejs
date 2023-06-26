
//createChat

import {createChat, findChat, findUserChats} from "../Services/chatServices.js";

const createChatController= (req, res) => {
    const  {firstId,secondId} = req.body;
    createChat(firstId,secondId).then(
        response =>{
            const {chat,newchat,status} = response;

            if (chat) {
                return res.status(status).json(chat);
            }

            return res.status(status).json(newchat);
        }
    ).catch(error => {
        return res.status(500).json({ error: `Error Chat: ${error.message}` });
    });
}
const findUserChatsController= (req, res) => {
    const  userId = req.userId;
    console.log(userId);
    findUserChats(userId).then(
        response =>{
            const {chats,status} = response;
            return res.status(status).json(chats);
        }
    ).catch(error => {
        return res.status(500).json({ error: `Error Find User Chat: ${error.message}` });
    });
}
const findChatController= (req, res) => {
    const  {firstId,secondId} = req.body;

    findChat(firstId,secondId).then(
        response =>{
            const {chat,status} = response;

            return res.status(status).json(chat);
        }
    ).catch(error => {
        return res.status(500).json({ error: `Error find Chat: ${error.message}` });
    });
}
export {createChatController,findUserChatsController,findChatController}