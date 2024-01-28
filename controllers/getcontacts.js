const Contact = require('../models/contact');
const User = require('../models/user');

module.exports.get = async (req, res) => {
    try {
        if (req.cookies && req.cookies.user_id) {
            const foundUser = await User.findById(req.cookies.user_id);

            if (foundUser) {
                const data = await Contact.find({});
                res.render('home', {
                    contact_list: data,
                });
            } else {
                console.log('User not found');
                return res.redirect('/login');
            }
        } else {
            console.log('Cookies not found');
            return res.redirect('/login');
        }
    } catch (err) {
        console.error('Error in finding user or contacts:', err);
        // Handle the error appropriately, e.g., show an error page
        res.status(500).send('Internal Server Error');
    }
};
