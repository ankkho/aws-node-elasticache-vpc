import co from 'co'
import getProductData from './functions/getProductData'
import saveProductData from './functions/saveProductData'

import { response } from './util'

// response for getAllProducts
const getProductDataResponse = (event, cb) => {
	co(function* () {
		const { pathParameters: { id } } = event
		const resp = yield getProductData(id);

		return cb(null, response(resp))
	})
};

const saveProductDataResponse = (event, cb) => {
	co(function* () {
		const { body } = JSON.parse(event.body);
		const resp = yield saveProductData(body)

		return cb(null, response(resp))
	})
};

export {
	getProductDataResponse,
	saveProductDataResponse,
};
