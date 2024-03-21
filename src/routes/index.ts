import { Request, Response, Router } from 'express'
import eventRouter from './events'

const router = Router()

router.get('', (req: Request, res: Response) => {
  return 'Hello'
})
router.use('/event', eventRouter)

export { router as Routes }
