import {
	getProductDataResponse,
	saveProductDataResponse,
} from './lib'

const getProductData = (event, context) => getProductDataResponse(event, (error, response) => context.done(error, response))
const saveProductData = (event, context) => saveProductDataResponse(event, (error, response) => context.done(error, response))

export {
	getProductData,
	saveProductData,
}
