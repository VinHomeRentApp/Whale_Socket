export const DUPLICATE_CODE_ERROR = 11000
export const DEFAULT_PORT = 4000
export const DEFAULT_BASE_METHODS = ['GET', 'POST', 'PUT', 'DELETE']

export const StatusCode = {
  OK: 200,
  CREATED: 201
}
export const ReasonError = {
  OK: 'Success',
  CREATED: 'Created'
}

export enum MESSAGE {
  INVALID_JSON_TOKEN = 'Json web token is invalid, try again',
  EXPIRED_JSON_TOKEN = 'Json web token is expired, try again'
}

export enum ERROR {
  CAST_ERROR = 'CastError',
  DUPLICATE_VALUE = DUPLICATE_CODE_ERROR,
  JSON_WEB_TOKEN_ERROR = 'JsonWebTokenError',
  TOKEN_EXPIRED = 'TokenExpiredError'
}
