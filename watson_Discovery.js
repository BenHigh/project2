var DiscoveryV1 = require('watson-developer-cloud/discovery/v1');

var discovery = new DiscoveryV1({
  username: 'e3c3e048-7e40-4dd6-ad21-3145742779ff',
  password: 'XKNXcS0uzl24',
  version: 'v1',
  version_date: '2017-11-07'
});

//******************************************************************************
//------------------ CREATING WATSON DISCOVERY ENVIRONMENT----------------------
//******************************************************************************
// discovery.createEnvironment({
//   name: 'project_2',
//   description: 'Coding Bootcamp Project 2',
//   size: 1
// },
//   function (err, response) {
//     if (err)
//       console.log('error:', err);
//     else
//       console.log(JSON.stringify(response, null, 2));
// });
//******************************************************************************


discovery.getEnvironments({}, function(error, data) {
  console.log(JSON.stringify(data, null, 2));
});

// discovery.getEnvironment(('{environment_id}'), function(error, data) {
//   console.log(JSON.stringify(data, null, 2));
// });
