/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var axios = require('axios');
var myWebsite = 'https://app.amgclubthailand.com';
// var myWebsite = 'http://mup-env-amgclubthailand.ium2ebz7mx.ap-southeast-1.elasticbeanstalk.com';
// var myWebsite = 'http://localhost:3000';
var kBankApi = 'https://dev-kpaymentgateway-services.kasikornbank.com'; // sandbox
// var kBankApi = 'https://kpaymentgateway-services.kasikornbank.com'; // prod

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});


/**********************
 * Example get method *
 **********************/

app.get('/kPayment', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

app.get('/kPayment/*', function(req, res) {
  // Add your code here
  

  res.json({success: 'get call succeed!', url: req.url , queryString: req.query});
});

/****************************
* Example post method *
****************************/

app.post('/kPayment', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/kPayment/*', async(req, res) => {
  // Add your code here
  try {
    let response = {
      data: null
    };
    let body = {};
    if(req.url === "/kPayment/charge") {
      response = await axios({
        method: 'post',
        url: kBankApi + '/card/v2/charge',
        headers: {
          'Content-Type' : 'application/json',
          'x-api-key' : 'skey_test_20245QqVUULLIBFXVMVxcilosmUoPPtK2O7gl'
          // 'x-api-key' : 'skey_prod_323gdKIlzRhR4v5RBxq63fdBzqppfWGOeTU'
        },
        data: JSON.stringify({
            ...req.body
        })
      })
      res.json({result: response.data})
    }
    if(req.url === "/kPayment/callback") {
      const { token ,  objectId , status , message , saveCard } = req.body;
      response = await axios({
        method: 'get',
        url: kBankApi + '/card/v2/charge/' + objectId,
        headers: {
          'Content-Type' : 'application/json',
          'x-api-key' : 'skey_test_20245QqVUULLIBFXVMVxcilosmUoPPtK2O7gl',
          // 'x-api-key' : 'skey_prod_323gdKIlzRhR4v5RBxq63fdBzqppfWGOeTU'
        }
      })
      let buff = new Buffer(JSON.stringify(response.data));
      let base64data = buff.toString('base64');

      res.redirect(myWebsite + '/payment?key='+base64data);
    }
    
    
  }catch(error) {
    res.json({error: error.message , body: req.body})
  }
  
});

/****************************
* Example put method *
****************************/

app.put('/kPayment', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/kPayment/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/kPayment', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/kPayment/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
