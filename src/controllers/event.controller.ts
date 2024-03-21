import { Request, Response } from 'express'
import { OK } from '~/core/successResponse.core'
import eventServices from '~/services/event.services'

class EventController {
  async getPaymentStatus(req: Request, res: Response) {
    console.log(req.body)

    return new OK({
      message: 'Payment Successfully!',
      metadata: await eventServices.getStatusPayment(req, res)
    }).send(res)
  }
}

export = new EventController()
