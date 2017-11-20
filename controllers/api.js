var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

var personality_insights = new PersonalityInsightsV3({
  username: "7ad6cee6-aab9-4f90-b17e-734d63050359",
  password: "tFUZRAZdCKJo",
  version_date: '2016-10-19'
});

personality_insights.profile({
  text: 'Enter more than 100 unique words here...',
  consumption_preferences: true
  },
  function (err, response) {
    if (err)
      console.log('error:', err);
    else
      console.log(JSON.stringify(response, null, 2));
});

module.exports = {
  index: function(req, res) {
    res.status(200).json({
      msg: "Test Api Works"
    });
  }
};
