const keyName = productId => `product:${productId}:data`;
const response = body => ({ statusCode: 200, body: JSON.stringify(body) })

export {
	keyName,
	response,
};
