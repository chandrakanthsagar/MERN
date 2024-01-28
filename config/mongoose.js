const mongoose = require('mongoose');
let db;
mongoose.connect('mongodb://localhost:27017/contact_list').then((res)=>{
    db=res;
    console.log("successfully connected to the database");
})
.catch((err)=>{
    console.log("error while connecting the database",err);
})
// const db = mongoose.connection;
// db.on('error', function(err){
//     console.error("connection error;", err);
// });

// db.on('open',()=>{
//     console.log("successfully connected ")
// })
