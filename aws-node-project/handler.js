'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go000000 TW Serverless v5.0! GITHUB_SHA=11111189 Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
