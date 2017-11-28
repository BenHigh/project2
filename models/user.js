var bcrypt = require('bcrypt-nodejs');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    // id: {
    //   autoIncrement: true,
    //   primaryKey: true,
    //   type: DataTypes.INTEGER
    // },
    name: {
      type: DataTypes.STRING,
      notEmpty: true
    }, 
    username: {
      type: DataTypes.TEXT
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    results: {
      type: DataTypes.STRING
    },
    matches: {
      type: DataTypes.STRING
    }
  });
 

  // checking if password is valid
  function validPassword(password) {
      return bcrypt.compareSync(password, this.local.password);
  };

  return User;
};
