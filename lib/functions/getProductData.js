const redis = require('../../aws/redis');
const util = require('../util');

const get = function* (productId) {
  const keyName = util.keyName(productId);
  yield redis.hmgetallAsync(keyName);
};

module.exports = { get };
