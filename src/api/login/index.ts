import dataDummy from '../../data/user.json'
import { LoginRequest, LoginResponse } from '../../dto/login'

const loginApi = () => {
  const login = async (data: LoginRequest): Promise<LoginResponse> => {
    try {
      if (data?.email === dataDummy?.email) {
        if (data?.password === dataDummy?.password) {
          return { status: 200, data: dataDummy }
        } else {
          return { status: 400, message: 'La contraseña es incorrecta' }
        }
      } else {
        return { status: 400, message: 'El correo ingresado no existe' }
      }
    } catch (error) {
      return { status: 500, message: error?.toString() }
    }
  }

  return {
    login
  }
}

export default loginApi