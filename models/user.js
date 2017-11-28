'use strict';
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
      type: DataTypes.TEXT,
      notEmpty: true
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
    summary: {
      type: DataTypes.TEXT,
      notEmpty: true
    },
    results: {
      type: DataTypes.STRING
    },
    matches: {
      type: DataTypes.STRING
    },
    last_logon: {
      type: DataTypes.DATE
    }
  });

  return User;
};
