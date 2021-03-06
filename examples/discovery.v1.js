'use strict';

var DiscoveryV1 = require('../discovery/v1');
var fs = require('fs');

var discovery = new DiscoveryV1({
  // if left unspecified here, the SDK will fall back to the DISCOVERY_USERNAME and DISCOVERY_PASSWORD
  // environment properties, and then Bluemix's VCAP_SERVICES environment property
  //username: 'INSERT YOUR USERNAME FOR THE SERVICE HERE',
  //password: 'INSERT YOUR PASSWORD FOR THE SERVICE HERE'
  username: 'YOUR USERNAME',
  password: 'YOUR PASSWORD',
  version_date: DiscoveryV1.VERSION_DATE_2016_12_15
});

discovery.getEnvironments({}, function(error, data) {
  console.log(JSON.stringify(data, null ,2));
});

// var file = fs.readFileSync('../test/resources/sampleHtml.html');
var file = fs.createReadStream('../test/resources/sampleWord.docx');

discovery.addDocument({
  environment_id: 'YOUR ENVIRONMENT ID',
  collection_id: 'YOUR COLLECTION ID',
  file: file,
}, function(error, data) {
  console.log(error);
  console.log(data);
});
