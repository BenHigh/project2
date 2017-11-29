var path = require("path");

module.exports = {
    // signup: function(req,res) {
    //     res.sendFile(path.join(__dirname, '../public/signup.html'));
    // },
    // login: function(req,res) {
    //     res.sendFile(path.join(__dirname, '../public/login.html'));
    // },
    results: function(req,res) {
        res.sendFile(path.join(__dirname, '../public/dashboard.html'));
    },
    logout: function(req, res) {
        req.session.destroy(function(err){
            res.redirect('/');
        });
    }
};