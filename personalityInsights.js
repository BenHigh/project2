// var User = require("/models/user.js");
var htmlInput;
var watsonInput;
var personalityResults;

var url = "https://en.wikipedia.org/wiki/Nigeria";

// Parses our HTML and helps us find elements
var cheerio = require("cheerio");
// Makes HTTP request for HTML page
var request = require("request");

request(url, function(error, response, html) {

  if (error) {
    console.log(error);
  }
  // console.log(response.body);

  htmlInput = response.body;
  //
  // watsonInput = minifiedHTML.toString();

  runWatson();
});

function runWatson() {
var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

var personality_insights = new PersonalityInsightsV3({
  username: "7ad6cee6-aab9-4f90-b17e-734d63050359",
  password: "tFUZRAZdCKJo",
  version_date: '2017-10-13'
});

personality_insights.profile({
  text: htmlInput,
  consumption_preferences: false,
  headers: {
    'content-type': 'text/html;charset=utf-8'
  }
  },
  function (err, response) {
    if (err)
      console.log('error:', err);
    else
      // console.log(JSON.stringify(response, null, 2));
      personalityResults = response;

      console.log(personalityResults);

});
}
