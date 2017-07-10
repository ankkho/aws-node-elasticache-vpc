const redis = require('../../aws/redis');
const util = require('../util');

const get = function* (productId) {
  const keyName = util.keyName(productId);
  const value = JSON.parse(event.body);
  yield redis.hmsetAsync(keyName, value);
};

module.exports = { get };
