const Contact = require('../models/contact');

module.exports.delete = (req, res) => {
    
    let id = req.query.id;
    console.log(id+"hello");
    Contact.findOneAndDelete(id)
    .then(()=>{
        console.log("deleted suceessfully");
        res.redirect('/')
    }).catch((err)=>{
        console.log(err);
    })
}
    
    