import * as express from 'express'
import router from './routers'
import { json } from 'body-parser'
import * as mongoose from 'mongoose'
import * as cors from 'cors'
import * as passport from 'passport'
import * as cookieParser from 'cookie-parser'
import * as session from 'express-session'
import redisClient from '~/middleware/redis/redis-server'
import * as ConnectRedis from 'connect-redis'
import passportstrategyinit from '~/middleware/auth/passport-init'

var RedisStore = ConnectRedis(session)

const app: express.Express = express()

app.use(cookieParser())
app.use(json())
app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: 'SECRET',
  resave: true,
  saveUninitialized: true,
}))
app.use(cors())
app.use(passport.initialize())
app.use(passport.session())
app.use(router)

passportstrategyinit()

mongoose.connect('mongodb://localhost:27017/myTest', (error) => {

  console.log(error ? error : '\x1b[42m%s\x1b[0m', 'Успешно: Соединение с MongoDB')

  app.listen(8085, () => { console.log('Express сервер запущен: 8085') })

})

