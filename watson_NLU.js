var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  'username': '77d970c9-fce9-4cb3-bf1e-f7f324c8c1b5',
  'password': '60h1FRDdSy2a',
  'version_date': '2017-02-27'
});

var parameters = {
  'url': 'www.ibm.com',
  'features': {
    'categories': {}
  }
};

natural_language_understanding.analyze(parameters, function(err, response) {
  if (err)
    console.log('error:', err);
  else
    console.log(JSON.stringify(response, null, 2));
});
