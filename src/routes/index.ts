import { Request, Response, Router } from 'express'
import eventRouter from './events'

const router = Router()

router.use('/event', eventRouter)

export { router as Routes }
