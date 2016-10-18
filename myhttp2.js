var request = require('request');
request('http://pbci.org.ng/', function (error, response, body) {
 if (!error && response.statusCode == 200) {
   console.log(body) // Show the HTML for the Google homepage. 
 }
})