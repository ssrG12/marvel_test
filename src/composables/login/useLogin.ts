import { useState } from 'react'
import { Alert } from 'react-native'
import loginApi from '../../api/login'
import { useDispatch } from 'react-redux'
import useRegex from '../../utils/useRegex'
import { setUser } from '../../reducers/user'
import { useAppNavigation } from '../../utils/useNavigation'

const useLogin = () => {
  const { login } = loginApi()
  const dispatch = useDispatch()
  const { isValidEmail } = useRegex()
  const navigation = useAppNavigation()

  const [email, setEmail] = useState<string>('')
  const [loader, setLoader] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')

  const loginUser = async () => {
    try {
      setLoader(true)
      if (email && password) {
        if (isValidEmail(email)) {
          const response = await login({ email, password })
          if (response?.data?.email) {
            dispatch(setUser(response?.data))
            setEmail('')
            setPassword('')
            navigation.navigate('Home')
          } else {
            Alert.alert('', response?.message)
          }
        } else {
          Alert.alert('', 'El formato de correo es incorrecto')
        }
      } else {
        Alert.alert('', 'Debes ingresar todos los campos')
      }
    } catch (error) {
      Alert.alert('', error?.toString())
    } finally {
      setLoader(false)
    }
  }

  return {
    email,
    loader,
    password,
    setEmail,
    loginUser,
    setPassword
  }
}

export default useLogin