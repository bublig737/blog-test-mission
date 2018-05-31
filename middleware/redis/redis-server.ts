import * as redis from 'redis'


let redisClient = redis.createClient()

redisClient.on("error",  (err) => {

  console.log(" Error " + err)

});

console.log('Redis клиент инициализирован')


export default redisClient
