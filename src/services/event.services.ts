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

    setTimeout(() => {
      io.emit(`payment-success-${data}`, { data })
      console.log(data)
    }, 4000)

    // Optionally, you can return the interval ID if needed
    return { data }
  }
}

export default EventServices
