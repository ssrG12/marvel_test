import { useEffect } from 'react'
import { Store } from '../../dto/store'
import { useSelector } from 'react-redux'
import { useAppNavigation } from '../../utils/useNavigation'

const useSplash = () => {
  const navigation = useAppNavigation()
  const userStore = useSelector((state: Store) => state?.userStore)

  useEffect(() => {
    setTimeout(() => {
      if (userStore?.user?.email) {
        navigation.navigate('Home')
      } else {
        navigation.navigate('Login')
      }
    }, 3000)
  }, [])
}

export default useSplash