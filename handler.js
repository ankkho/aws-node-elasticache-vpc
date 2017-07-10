const lib = require('./lib');

exports.handler = (event, context) =>
lib.getAllProductsResponse(event, (error, response) => context.done(error, response));
