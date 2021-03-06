var authCont = require('../controllers/authcont.js');

module.exports = function(app, passport) {
    // app.get('/signup', authCont.signup);

    app.post('/auth/signup', passport.authenticate('local-signup', {
        successRedirect: '/results',
        failureRedirect: '/',
        failureFlash: true
    }));

    app.get('/results', authCont.results);

    app.post('/auth/login', passport.authenticate('local-login', {
        successRedirect: '/api/getResults',
        failureRedirect: '/',
        failureFlash: true
    }));

    app.get('/auth/logout', authCont.logout);

    function isLoggedIn(req, res, next) {
	    if (req.isAuthenticated()){
	        return next();
	    }
	    res.redirect('/');
	}
};
