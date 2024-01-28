const user = require('../models/user');

module.exports.add = async(req,res)=>{
    user.create(req.body)
    .then(()=>{
        console.log("user created sucessfully");
        res.redirect('/login');
    })
    .catch((err)=>{
        console.log(err);
    })
}