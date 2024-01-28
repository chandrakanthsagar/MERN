const Contact = require('../models/contact');

module.exports.add = async(request,res)=>{
        
      console.log('contacts');
        Contact.create(request.body
            // name:request.body.name,
            // phone:request.body.phone
        ).then(()=>{
            console.log("contact created successfully");
            return;
        }).catch((err)=>{
            console.log(err);
            return;
        })
    
        
        res.redirect('/');
}