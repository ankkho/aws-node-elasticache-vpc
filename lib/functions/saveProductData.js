const redis = require('../../aws/redis');
const util = require('../util');

const save = function* (body) {
	const { productId } = body;
	const keyName = util.keyName(productId);
	return yield redis.hmsetAsync(keyName, body);
};

module.exports = { save };
