import { RootStackParamList } from '../dto/routes'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export const useAppNavigation = () => {
  return useNavigation<NativeStackNavigationProp<RootStackParamList>>()
}