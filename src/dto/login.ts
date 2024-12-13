export interface UserDTO {
  name: string
  email: string
  lastName: string
  password?: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  data?: UserDTO
  status: number
  message?: string
}