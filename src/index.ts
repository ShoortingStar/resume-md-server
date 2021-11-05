import Koa from 'koa'
import BodyParser from 'koa-bodyparser'
import { PORT } from './config/constant'
import { loggerMiddleware } from './middlewares/logger'
import { errorHandler, responseHandler } from './middlewares/response'

const app = new Koa()
app.use(async (ctx) => {
  ctx.body = 'Hello World'
})

// Logger
app.use(loggerMiddleware)

// ctx.body
app.use(BodyParser())

// Error Handler
app.use(errorHandler)

// Success Handler
app.use(responseHandler)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} is running`)
})
