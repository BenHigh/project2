'use strict';
module.exports = function(sequelize, DataTypes) {
  var Corp = sequelize.define("Corp", {
    corp_name: {
      type: DataTypes.STRING,
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
      type: DataTypes.TEXT
    },
    results: {
      type: DataTypes.JSONB,
      allowNull: false
    },
    big5: {
      type: DataTypes.STRING
    },
    matches: {
      type: DataTypes.TEXT
    },
    last_logon: {
      type: DataTypes.DATE
    }
  });

  // Corp.associate = function(models) {
  //   Corp.hasMany(models.User, {
  //     onDelete: "cascade"
  //   });
  // };

  return Corp;
};
