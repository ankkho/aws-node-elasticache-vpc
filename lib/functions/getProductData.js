const redis = require('../../aws/redis');
const util = require('../util');

const get = function* (productId) {
	const keyName = util.keyName(productId);
	const name = {
		name: 'foo',
	};
	console.log('.......');
	yield redis.client.hmsetAsync(keyName, name);
	const data = yield redis.client.hmgetallAsync(keyName);
	console.log({ data });
	return data ? { data: {} } : { data };
};

module.exports = { get };
