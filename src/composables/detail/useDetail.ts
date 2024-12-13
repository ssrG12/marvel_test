import detailApi from '../../api/detail'
import { Results } from '../../dto/detail'
import { useEffect, useState } from 'react'
import { ResultsHeroes } from '../../dto/home'
import { RootStackParamList } from '../../dto/routes'
import { useAppNavigation } from '../../utils/useNavigation'
import { RouteProp, useRoute } from '@react-navigation/native'

const useDetail = () => {
  const navigation = useAppNavigation()
  const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>()

  const { getListComics } = detailApi()

  const [limit, setLimit] = useState<number>(10)
  const [offset, setOffset] = useState<number>(0)
  const [data, setData] = useState<ResultsHeroes>()
  const [comics, setComics] = useState<Results[]>([])
  const [loader, setLoader] = useState<boolean>(false)
  const [loaderPage, setLoaderPage] = useState<boolean>(false)
  const [moreResults, setMoreResults] = useState<boolean>(true)

  useEffect(() => {
    setLimit(10)
    setOffset(0)
    setMoreResults(true)
    setData(route?.params?.data)
    getComics()
  }, [])

  const getComics = async () => {
    try {
      setLoader(true)
      const response = await getListComics({ id: route?.params?.data?.id, offset: 0, limit: 10 })
      if (response?.data?.results && response?.data?.results?.length > 0) {
        setComics(response?.data?.results)
      } else {
        setComics([])
      }
    } catch (error) {
      return error
    } finally {
      setLoader(false)
    }
  }

  const scrollListComics = async () => {
    try {
      setLoaderPage(true)
      let count = offset + 10
      setOffset(offset + 10)
      const response = await getListComics({ id: route?.params?.data?.id, limit, offset: count })
      if (response?.data?.results && response?.data?.results?.length > 0) {
        setComics(prevItems => [...prevItems, ...response?.data?.results])
      } else {
        setMoreResults(false)
      }
    } catch (error) {
      return error
    } finally {
      setLoaderPage(false)
    }
  }

  const navigateBack = async () => {
    try {
      navigation.goBack()
    } catch (error) {
      return error
    }
  }

  return {
    data,
    comics,
    loader,
    loaderPage,
    moreResults,
    navigateBack,
    scrollListComics
  }
}

export default useDetail