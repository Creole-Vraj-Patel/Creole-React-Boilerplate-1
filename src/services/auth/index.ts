import { NormalInstance } from '../instances/NormalInstance'
import { apiEndpoints } from '../../constants/apiEndpoints'
import {
  type LoginPayload,
  type OtpVerificationPayload,
  type RegisterPayload
} from './payloadTypes'
import { apiMethods } from '../../constants/enums'

export const register = async (payload: RegisterPayload) =>
  await NormalInstance({
    method: apiMethods.POST,
    url: apiEndpoints.register,
    data: { ...payload }
  })

export const login = async (payload: LoginPayload) =>
  await NormalInstance({
    method: apiMethods.POST,
    url: apiEndpoints.login,
    data: { ...payload }
  })

export const otpVerification = async (payload: OtpVerificationPayload) =>
  await NormalInstance({
    method: apiMethods.POST,
    url: apiEndpoints.otpVerification,
    data: { ...payload }
  })
