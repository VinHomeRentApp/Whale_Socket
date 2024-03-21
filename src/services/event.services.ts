import { Request, Response } from 'express'
import { io } from '~/config/socket'
import { BadRequestError } from '~/core/errorResponse.core'

class EventServices {
  static async getStatusPayment(req: Request, res: Response) {
    if (req.body === undefined) {
      throw new BadRequestError('Cannot get data').getNotice()
    }

    const { userId, name } = req.body

    if (!userId || !name) {
      throw new BadRequestError('Cannot get status').getNotice()
    }

    io.emit(`payment-success-${userId}`, { name })
    io.emit(`payment-success-admin`, { userId, name })

    return { data: { userId, name } }
  }
}

export default EventServices
