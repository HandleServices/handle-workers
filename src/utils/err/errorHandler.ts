import { AxiosError } from 'axios'

import { ErrorType } from '@/types/enums/ErrorType'

import { HandleError } from '../class/HandleError'
import ForbiddenErrorHandler from './ForbiddenErrorHandler'
import NetworkErrorHandler from './NetworkErrorHandler'
import NotFoundErrorHandler from './NotFoundErrorHandler'
import UnknowErrorHandler from './UnknowErrorHandler'

const errorHandler: {
  [key in ErrorType]: React.FC<{ error: HandleError | AxiosError }>
} = {
  [ErrorType.FORBIDDEN]: ForbiddenErrorHandler,
  [ErrorType.NOT_FOUND]: NotFoundErrorHandler,
  [ErrorType.UNKNOWN]: UnknowErrorHandler,
  [ErrorType.NETWORK_ERROR]: NetworkErrorHandler,
}

export default errorHandler
