const mongoose = require('mongoose');

const contactschema = new mongoose.Schema({
    name:{
         type:String,
         required:true
    },
    phone:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Contact',contactschema);