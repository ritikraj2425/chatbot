const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
}, { collection: 'ChatBotAuthentication' });
const Users = mongoose.model('ChatBotAuthentication', userDetailsSchema);



const historySchema = new mongoose.Schema({
    email: String,
    text: String,
}, { collection: 'chatbotHistory' });
const  History= mongoose.model('chatbotHistory', historySchema);

module.exports = {Users,History};


