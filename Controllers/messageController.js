import {createMessage, getMessage} from "../Services/messageService.js";


const createMessageController= (req, res) => {
    const  { chatId,senderId,text} = req.body;

    createMessage( chatId,senderId,text).then(
        response =>{
            const {message,status} = response;

            return res.status(status).json(message);
        }
    ).catch(error => {
        return res.status(500).json({ error: `Error Create Message: ${error.message}` });
    });
}
const getMessageController= (req, res) => {
    const  {chatId} = req.body;

    getMessage( chatId).then(
        response =>{
            const {messages,status} = response;

            return res.status(status).json(messages);
        }
    ).catch(error => {
        return res.status(500).json({ error: `Error Create Message: ${error.message}` });
    });
}
export {getMessageController,createMessageController}