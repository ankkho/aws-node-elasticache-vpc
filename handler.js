const lib = require('./lib');

exports.handler = (event, context) =>
lib.getProductDataResponse(event, (error, response) => context.done(error, response));
