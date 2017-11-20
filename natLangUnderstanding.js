var fs = require('fs');
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

var nlu = new NaturalLanguageUnderstandingV1({
  username: '77d970c9-fce9-4cb3-bf1e-f7f324c8c1b5',
  password: '60h1FRDdSy2a',
  version_date: NaturalLanguageUnderstandingV1.VERSION_DATE_2017_02_27
});

nlu.analyze({
  'html': file_data, // Buffer or String
  'features': {
    'concepts': {},
    'keywords': {},
  }
}, function(err, response) {
     if (err)
       console.log('error:', err);
     else
       console.log(JSON.stringify(response, null, 2));
 });
