import { NextFunction, Request, Response } from 'express'
import { InternalServerError } from '~/core/errorResponse.core'
import STATUS_CODE from '~/core/statusCode.core'

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err.stack)
  err.statusCode = err.status || STATUS_CODE.INTERNAL_SERVER_ERROR
  err.message = err.message || 'Internal server error'
  if (err.name) {
    switch (err.name) {
      default:
        err = new InternalServerError('Internal server error')
        break
    }
  }

  res.status(err.status).json({
    message: err.message,
    status: err.status
  })

  next()
}
