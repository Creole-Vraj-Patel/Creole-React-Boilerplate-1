export interface RegisterPayload {
  email: string
  password: string
}

export interface LoginPayload {
  email: string
  password: string
}

export interface OtpVerificationPayload {
  otp: string
}
