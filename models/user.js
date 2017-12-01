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
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    // email: {
    //   type: DataTypes.STRING,
    //   validate: {
    //     isEmail: true
    //   }
    // },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    summary: {
      type: DataTypes.TEXT,
      notEmpty: true,
      // validate:
    },
    big5: {
      type: DataTypes.STRING
    },
    results: {
      type: DataTypes.JSONB
    },
    matches: {
      type: DataTypes.TEXT
    }
  });

  return User;
};
