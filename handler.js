const lib = require('./lib');

const getProductData = (event, context) =>
lib.getProductDataResponse(event, (error, response) => context.done(error, response));

module.exports = {
  getProductData,
};
