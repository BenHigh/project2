var db = require("../models");
var request = require("request");
var cheerio = require("cheerio");

module.exports = {
  createNewCorp: function(req, res) {
    res.status(200).json({
      msg: "Company Added!"
    });
  },


// USER RUN WATSON FROM SUMMARY IN DB...... POST RESULTS BACK TO DB!!!!!
  getResults: function(req, res) {
    var id = req.params.id;
    // PERSONALITY INSIGHTS FUNCTION - - - - - - - - - - - - - - - - - - - - - - - -
    function runWatson(id, watsonInput) {
      var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

      var personality_insights = new PersonalityInsightsV3({
        username: "7ad6cee6-aab9-4f90-b17e-734d63050359",
        password: "tFUZRAZdCKJo",
        version_date: '2017-10-13'
      });

      personality_insights.profile({
          text: watsonInput,
          consumption_preferences: false,
          headers: {
            'content-type': 'text/html;charset=utf-8'
          }
        },
        function(err, response) {
          if (err)
            console.log('error:', err);
          else {
            // \/  Logs JSON response from Watson  \/
            // console.log(JSON.stringify(response, null, 2));
            // var personalityResults = JSON.stringify(response, null, 2);
            // console.log(personalityResults);
            console.log(response);


            var newResult = {
              results: response
            };

            // UPDATE database with results (JSONB) from Watson - - - - - - - -
            db.User.update(newResult, {
              where: {
                id: id
              }
            }).then(function() {
              db.User.findAll({
                // attributes: ['results'],
                where: {
                  id: req.params.id
                }

                // db findOne query callback
              }).then(function(userBig5) {
                function pushUserResults(userBig5) {
                  var newString = userBig5[0].dataValues.results.personality[0].percentile;

                  for (var i = 1; i < userBig5[0].dataValues.results.personality.length; i++) {
                    newString += "," + userBig5[0].dataValues.results.personality[i].percentile;
                  }

                  var userResultString = {
                    big5: newString
                  };

                  // console.log("**********************************");
                  // console.log("**********************************");
                  // console.log(userResultString);

                  db.User.update(userResultString, {
                    where: {
                      id: id
                    }
                  }).then(function() {
                    // console.log("**********************************");
                    // console.log("**********************************");
                    // console.log(userResultString);
                    res.redirect('/results');
                  });

                }

                pushUserResults(userBig5);
              });
            });
          }
        });
    }

    db.User.findOne({
      where: {
        id: req.params.id
      }
      // db findOne query callback
    }).then(function(dbPost) {
      // res.json(dbPost.summary);
      var watsonInput = dbPost.summary;


      // apiCont.getResults(id, watsonInput);

      // console.log(dbPost);

      runWatson(id, watsonInput);
    }).then(function(dbPost) {

    });

  },

// 2. USER COMPARE TO  ALLLLLL COMPANIES
  compare: function(req, res) {
    var userArray;
    var user_score_string;
    // var CompanyScores = function(corp_name, scores) {
    //   this.corp_name = corp_name;
    //   this.scores = scores;
    // };
    // 2. get all corp 'results' and save to variable

    db.User.findAll({
      attributes: ['big5'],
      where: {
        id: req.params.id
      }

      // db findOne query callback
    }).then(function(userScores) {
      user_score_string = userScores[0].dataValues.big5;
      // console.log(user_score_string);
      userArray = user_score_string.split(",");
      console.log(userArray);
      // console.log(userArray);
    }).then(function(){
      db.Corp.findAll({
      // attributes: ['results']


    }).then(function(dbPost) {
      // console.log(dbPost[0]);
      console.log(dbPost.length);

      var curLowest;
      var lowScore = 10;
      var resultsArray = [];
      var score = 0;

      for (var i = 0; i < dbPost.length; i++) {
        var tempData = [];
        score += parseFloat(dbPost[i].dataValues.results.personality[0].percentile) + parseFloat(userArray[0]);
        score += parseFloat(dbPost[i].dataValues.results.personality[1].percentile) + parseFloat(userArray[1]);
        score += parseFloat(dbPost[i].dataValues.results.personality[2].percentile) + parseFloat(userArray[2]);
        score += parseFloat(dbPost[i].dataValues.results.personality[3].percentile) + parseFloat(userArray[3]);
        score += parseFloat(dbPost[i].dataValues.results.personality[4].percentile) + parseFloat(userArray[4]);
        name = dbPost[i].dataValues.id;
        // console.log(dbPost[i].results.personality);
        tempData.push(score);
        tempData.push(name);
        resultsArray.push(tempData);
        // console.log(dbPost[i].dataValues.results.personality[0].percentile);
        // console.log(userArray[0]);

        // if(score < lowScore) {
        //   lowScore = score;
        //   curLowest = i;

          // tempData.push({dbPost[i].dataValues.results.personality[0].name, score});

        // }
      }
      console.log(resultsArray);
      // console.log(curLowest);
      db.Corp.findAll({where:{id:curLowest+1}}).then(function(corp){
        res.json(corp);

      });
      });

  });
},

getResultsFromURL: function(req, res) {
  // var User = require("/models/user.js");
  var id = req.params.id;
  var htmlInput;
  var watsonInput;
  var personalityResults;

  var url = "";

  // Parses our HTML and helps us find elements
  var cheerio = require("cheerio");
  // Makes HTTP request for HTML page
  var request = require("request");


  function runWatson() {

    request(url, function(error, response, html) {

      if (error) {
        console.log(error);
      }
      // console.log(response.body);

      htmlInput = response.body;
      //
      // watsonInput = minifiedHTML.toString();
      //
      // runWatson();
    });


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

        // console.log(personalityResults);

  });
  }

  db.Corp.findOne({where:{id:id}}).then(function(dbPost){
    console.log(dbPost);
    // url = dbPost[0].dataValues.big5;
  }).then(runWatson());

},

  test: function(req, res) {
    res.status(200).json({
      msg: "Test Route Works!"
    });
  }

};
