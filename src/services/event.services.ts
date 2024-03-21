import { Request, Response } from 'express'
import { io } from '~/config/socket'
import { BadRequestError } from '~/core/errorResponse.core'

class EventServices {
  static async getStatusPayment(req: Request, res: Response) {
    if (req.body === undefined) {
      throw new BadRequestError('Cannot get data').getNotice()
    }

    const { data } = req.body

    if (!data) {
      throw new BadRequestError('Cannot get status').getNotice()
    }

    io.emit(`payment-success-${data}`, { data })
    return { data }
  }
}

export default EventServices
