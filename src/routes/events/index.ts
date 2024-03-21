import { Router } from 'express'
import EventController from '~/controllers/event.controller'
import { asyncHandler } from '~/utils/asyncHandler'

const eventRouter = Router()

eventRouter.post('/payment-success', asyncHandler(EventController.getPaymentStatus))

export default eventRouter
