import { Image, View } from 'react-native'
import useSplash from '../../composables/splash/useSplash'

export const Splash = () => {
  useSplash()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ED1D24' }} >
      <Image source={require('../../assets/images/logo.png')} resizeMode='contain' style={{ width: '100%', height: 100 }} />
    </View>
  )
}