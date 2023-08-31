import { NormalInstance } from '../instances/NormalInstance';
import { apiEndpoints } from '../../constants/apiEndpoints';
import { LoginPayload, OtpVerificationPayload, RegisterPayload } from './payloadTypes';
import { apiMethods } from '../../constants/enums';

export const register = (payload: RegisterPayload) =>
  NormalInstance({
    method: apiMethods.POST,
    url: apiEndpoints.register,
    data: { ...payload },
  });

export const login = (payload: LoginPayload) =>
  NormalInstance({
    method: apiMethods.POST,
    url: apiEndpoints.login,
    data: { ...payload },
  });

export const otpVerification = (payload: OtpVerificationPayload) =>
  NormalInstance({
    method: apiMethods.POST,
    url: apiEndpoints.otpVerification,
    data: { ...payload },
  });
