var personalityResults;

var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

var personality_insights = new PersonalityInsightsV3({
  username: "7ad6cee6-aab9-4f90-b17e-734d63050359",
  password: "tFUZRAZdCKJo",
  version_date: '2017-10-13'
});

personality_insights.profile({
  text: 'My name is Thomas.  The grounding line - the point where this front starts to become buoyant - has pulled back towards the land by more than 30km since the early 1990s, leading some researchers to believe the whole glacier could collapse within a few hundred years if global warming accelerates matters.  Radar can see through hundreds of metres of ice to sense the topography at the base of the glacier. And although the expedition could not map the PIG’s full extent, sampling was done at key places on the main flowing trunk and the major tributaries. A total of 1,500 sq km was imaged.',
  consumption_preferences: true
  },
  function (err, response) {
    if (err)
      console.log('error:', err);
    else
      console.log(JSON.stringify(response, null, 2));
      results = JSON.stringify(response, null, 2);

});

module.exports = personalityResults;
