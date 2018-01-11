const getProductData = require('./functions/getProductData');
const saveProductData = require('./functions/saveProductData');

const util = require('./util');

// response for getAllProducts
const getProductDataResponse = (event, cb) => {
	const id = event.pathParameters.id;
	const resp = getProductData.get(id);

	return cb(null, util.response(resp));
};

const saveProductDataResponse = (event, cb) => {
	const { body } = JSON.parse(event.body);
	saveProductData.save(body).then(resp => cb(null, util.response('done')));
};

export {
	getProductDataResponse,
	saveProductDataResponse,
};
