var authCont = require('../controllers/authcont.js');
 
module.exports = function(app) {
    app.get('/signup', authCont.signup);

    app.get('/signin', authCont.signin)
}