var bCrypt = require('bcrypt-nodejs');
 
 
module.exports = function(passport, user) {
 
    var User = user;
 
    var LocalStrategy = require('passport-local').Strategy;

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id).then(function(user) {
        	if(user){
        		done(null, user.get());
        	}else{
            	done(user.errors, user);
        	}
        });
    });
 
    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
 
        function(req, username, password, done) {
        	console.log('here 34 passport');
            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };
 
            User.findOne({where:{username: username}}).then(function(user) {
                if (user)
                {
                    return done(null, false, {
                        message: 'That email is already taken'
                    });
                } else {
                    var userPassword = generateHash(password);
                    var data =
                        {
                            username: username,
                            password: userPassword,
                            name: req.body.firstname + " " + req.body.lastname
                        };
 
                    User.create(data).then(function(newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }
 
                        if (newUser) {
                            return done(null, newUser);
                        }
                    });
                }
            });
        }
    ));

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
        function (req, username, password, done) { // callback with email and password from our form
        	var isValidPassword = function(userpass,password){
		    	return bCrypt.compareSync(password, userpass);
		    }
            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            User.findOne({where:{username: username}}).then(function (user) {

                if (!user) {
			        return done(null, false, { message: 'Email does not exist' });
			    }

			    if (!isValidPassword(user.password,password)) {
			        return done(null, false, { message: 'Incorrect password.' });
			    }

			    var userinfo = user.get();
			    return done(null,userinfo);

		    }).catch(function(err){

		      	console.log("Error:",err);

		      return done(null, false, { message: 'Something went wrong with your Signin' });
		    });
    	})
    );
}