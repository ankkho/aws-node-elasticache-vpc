import redis from '../../aws/redis'
import { keyName } from '../util'

function* save(body) {
	const { productId } = body;
	return yield redis.hmsetAsync(keyName(productId), body);
}

export default save
