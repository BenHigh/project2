module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define("Company", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  

  return Company;
};
