const getProductData = require('./getProductData');

// response for getAllProducts
const getProductDataResponse = (event, cb) => {
  console.log(event);
};

const saveProductDataResponse = (event, cb) => {

};

module.exports = {
  getAllProductsResponse,
  saveProductDataResponse,
};
