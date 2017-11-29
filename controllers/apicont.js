module.exports = {
  createNewCorp: function(req, res) {
    res.status(200).json({
      msg: "Company Added!"
    });
  }
};
