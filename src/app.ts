import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express, { Express, NextFunction, Request, Response } from 'express'
import morgan from 'morgan'
import { DEFAULT_BASE_METHODS } from './constants'
import { NotFoundError } from './core/errorResponse.core'
import { errorHandler } from './middleware/errorHandler'
import { Routes } from './routes'
import path from 'path'

const app: Express = express()

dotenv.config()
app.use(morgan('dev'))

app.use(
  cors({
    origin: '*',
    methods: DEFAULT_BASE_METHODS,
    allowedHeaders: ['Content-Type', 'Authorization']
  })
)

app.set('views', path.join(__dirname, 'views'))
app.use('/', express.static(path.join(__dirname, '../public')))
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', Routes)

app.get('/', (req: Request, res: Response) => {
  res.render('index')
})

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  const err = new NotFoundError(`Route ${req.originalUrl} not found`).getNotice() as any
  next(err)
})

app.use(errorHandler)

export default app
