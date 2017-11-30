var fs = require("fs");

var minify = require('html-minifier').minify;

var htmlInput;
var watsonInput = "";
var personalityResults = {};

var url = "https://en.wikipedia.org/wiki/Nigeria";

// Parses our HTML and helps us find elements
var cheerio = require("cheerio");
// Makes HTTP request for HTML page
var request = require("request");

// Making a request for reddit's "webdev" board. The page's HTML is passed as the callback's third argument
request(url, function(error, response, html) {

  if (error) {
    console.log(error);
  }
  // console.log(response.body);

  htmlInput = response.body;

  console.log("**********************************");
  console.log("**********************************");

  var minifiedHTML = minify(htmlInput, {
    removeScriptTypeAttributes: true,
    removeTagWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    removeEmptyElements: true,
    removeComments: true,
    removeStyleLinkTypeAttributes: true,
    collapseWhitespace: true,
    conservativeCollapse: true

  });

  // console.log(minifiedHTML);

  watsonInput = minifiedHTML.toString();

  // console.log(watsonInput);



  // console.log(htmlInput);

  //
  // // Load the HTML into cheerio and save it to a variable
  // // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  // var $ = cheerio.load(html);
  //
  // // An empty array to save the data that we'll scrape
  // var results = [];
  //
  // // With cheerio, find each p-tag with the "title" class
  // // (i: iterator. element: the current element)
  // $("p.title").each(function(i, element) {
  //
  //   // Save the text of the element in a "title" variable
  //   var title = $(element).text();
  //
  //   // In the currently selected element, look at its child elements (i.e., its a-tags),
  //   // then save the values for any "href" attributes that the child elements may have
  //   var link = $(element).children().attr("href");
  //
  //   // Save these results in an object that we'll push into the results array we defined earlier
  //   results.push({
  //     title: title,
  //     link: link
  //   });
  // });
  //
  // // Log the results once you've looped through each of the elements found with cheerio
  // console.log(results);
  runWatson();
});

// ************************************************************************************
// - - - - - - - - - - - HTML MINIFIER - - - - - - -  - -  - - - - -
// ************************************************************************************




// ************************************************************************************
// - - - - - - - - - - - PERSONALITY INSIGHTS - - - - - - -  - - - -
// ************************************************************************************
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
      console.log(JSON.stringify(response, null, 2));
      personalityResults = JSON.stringify(response, null, 2);

});
}
// console.log(personalityResults);

module.exports = personalityResults;
