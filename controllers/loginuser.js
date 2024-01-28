const user = require('../models/user');

module.exports.createSession = async function (req, res) {
    try {
        const foundUser = await user.findOne({ Email: req.body.email });
        console.log(foundUser);

        if (foundUser) {
            if (foundUser.Password !== req.body.password) {
                console.log("error pass");
                // Redirect with an error query parameter
                return res.redirect('/login?error=password');
            }

            res.cookie('user_id', foundUser.id);
            return res.redirect('/getlists');
        } else {
            console.log("error passed");
            return res.redirect('/login?error=user_not_found');
        }
    } catch (err) {
        console.log('error in finding user in signing in ', err);
        // Redirect with an error query parameter
        return res.redirect('/login?error=database_error');
    }
};
