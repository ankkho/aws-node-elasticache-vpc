const keyName = productId => `product:${productId}:data`;

const response = message => ({
	statusCode: 200,
	body: {
		message,
	},
});

module.exports = {
	keyName,
	response,
};
