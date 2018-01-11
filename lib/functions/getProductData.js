import redis from '../../aws/redis'
import { keyName } from '../util'

function* get(productId) {
	const name = {
		name: 'foo',
	};
	yield redis.client.hmsetAsync(keyName(productId), name);
	const data = yield redis.client.hmgetallAsync(keyName);
	return data ? { data: {} } : { data };
}

export default get
