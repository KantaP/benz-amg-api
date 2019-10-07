/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */

exports.handler = function afterConfirmationTrigger(event, context, callback) {
  const AWS = require('aws-sdk');
  const cognitoISP = new AWS.CognitoIdentityServiceProvider();

  const params = {
    UserPoolId: event.userPoolId,
    Username: event.userName
  };

  if(event.request.userAttributes.birthdate === '1970-01-01') {
    params.GroupName = 'Admins'
  } else {
    params.GroupName = 'Users'
  }

  cognitoISP
    .adminAddUserToGroup(params)
    .promise()
    .then(() => callback(null, event))
    .catch(err => callback(err, event));
};
