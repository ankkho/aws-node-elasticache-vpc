const redis = require('redis')
const bluebird = require('bluebird')
const currentRedisEndpoint = 'redis://localhost:6379'

bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)

const createRedisClient = endpoint => {
	const clientObj = redis.createClient(false, endpoint, {
		no_ready_check: true
	})

	clientObj.on("error", (err) => {
		console.log(`Error while creating redis client: ${err}`);
	})

	return clientObj
}

const client = createRedisClient(currentRedisEndpoint)


module.exports = {
	client
}
