/*
	Returns promise functions for interacting with redis
*/

import redis from 'redis'
import bluebird from 'bluebird'

bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)

const createRedisClient = () => {
	const clientObj = redis.createClient(6379, process.env.cacheUrl, { no_ready_check: true })

	clientObj.on('error', (err) => {
		console.log(`Error while creating redis client: ${err}`)
	})

	return clientObj
}

const client = createRedisClient()

export default client
