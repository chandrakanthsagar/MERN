const express = require('express');
const router = express.Router();

const passport = require('passport')
const LocalStrategy = require('passport-local')
let Contact = require('../models/contact')
require('../config/passport-local-strategy')
const adduser = require('../controllers/adduser');
const addcontact = require('../controllers/addcontact')
const getcontact = require('../controllers/getcontacts');
const deletecontact = require('../controllers/deletecontact');
const loginuser = require('../controllers/loginuser');

const login_user = require('../controllers/login-user');
router.get('/getlists',getcontact.get);
router.post('/createcontact',addcontact.add);
router.get('/deletecontact',deletecontact.delete);
router.get('/', async (req, res) => {
    console.log("signin");
    res.render('signup');  // Remove the leading forward slash
});

router.get('/login',async(req,res)=>{
    res.render('login');
})

router.post('/createsession',loginuser.createSession)
router.get('/getlistssss', isAuthenticated, async (req, res) => {
    const contact_list = await Contact.find({});
  
    res.render('home', {
        contact_list: contact_list,
    });
});

function isAuthenticated(req, res, next) {
    // Passport adds a `req.isAuthenticated()` method
    if (req.isAuthenticated()) {
        return next();
    }
    // Redirect to login page if not authenticated
    res.redirect('/login');
}

router.post('/create-session', passport.authenticate('local', {
    successRedirect: "/getlistssss",
    failureRedirect: '/login'
}));

router.post('/adduser',adduser.add);
router.get('/logout', (req,res) => {
    
    req.logout((err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Logout failed' });
        }
        
        // Redirect to the login page or send a success response
        console.log("User Logged out. Redirecting to login page.");
        
        //res.render('login');
        //console.log("User Logged out");
    });
   
    return res.status(200).json({ success: 'Logout successful' });
    
 })

module.exports = router;



// const express = require('express');
// const router = express.Router();

// let Contact = require('../models/contact')
// const adduser = require('../controllers/adduser');
// const addcontact = require('../controllers/addcontact')
// const getcontact = require('../controllers/getcontacts');
// const deletecontact = require('../controllers/deletecontact');
// const loginuser = require('../controllers/loginuser');
// router.get('/getlists',getcontact.get);
// router.post('/createcontact',addcontact.add);
// router.get('/deletecontact',deletecontact.delete);
// router.get('/', async (req, res) => {
//     console.log("signin");
//     res.render('signup');  // Remove the leading forward slash
// });

// router.get('/login',async(req,res)=>{
//     res.render('login');
// })

// router.post('/createsession',loginuser.createSession)

// router.post('/adduser',adduser.add);


// module.exports = router;











// // router.post('/createcontact',(request,res)=>{
// //     // console.log(typeof(request.body));
// //     // // let newcontact = JSON.parse(request.body);
// //     // // console.log(newcontact);
// //     // // contactlist.push(newcontact);
// //     // console.log(request.body.name);
// //     // console.log(request.body.phn);
// //     // contactlist.push({"name":request.body.name,"phn":request.body.phn});

// //     Contact.create(request.body
// //         // name:request.body.name,
// //         // phone:request.body.phone
// //     ).then(()=>{
// //         console.log("contact created successfully");
// //         return;
// //     }).catch((err)=>{
// //         console.log(err);
// //         return;
// //     })

    
// //     res.redirect('/');
// // })


// // router.get('/deletecontact', (req, res) => {
// //     // console.log(req.query.phn); // Use req.query instead of req.params
// //     // let phone = req.query.phn;
// //     // let contactindex = contactlist.findIndex(contact=>contact.phn==phone);
// //     // if(contactindex!=-1){
// //     //     contactlist.splice(contactindex,1);
        
// //     // }
// //     let id = req.query.id;
// //     console.log(id+"hello");
// //     Contact.findOneAndDelete(id)
// //     .then(()=>{
// //         console.log("deleted suceessfully");
// //         res.redirect('/')
// //     }).catch((err)=>{
// //         console.log(err);
// //     })
    
    
// // });

