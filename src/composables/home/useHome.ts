import homeApi from '../../api/home'
import { Store } from '../../dto/store'
import { useEffect, useState } from 'react'
import { ResultsHeroes } from '../../dto/home'
import { deleteStore } from '../../reducers/user'
import { useDispatch, useSelector } from 'react-redux'
import { useAppNavigation } from '../../utils/useNavigation'

const useHome = () => {
  const dispatch = useDispatch()
  const navigation = useAppNavigation()
  const userStore = useSelector((state: Store) => state?.userStore)

  const { getListHeroes } = homeApi()

  const [limit, setLimit] = useState<number>(10)
  const [offset, setOffset] = useState<number>(0)
  const [loader, setLoader] = useState<boolean>(false)
  const [data, setData] = useState<ResultsHeroes[]>([])
  const [loaderPage, setLoaderPage] = useState<boolean>(false)
  const [moreResults, setMoreResults] = useState<boolean>(true)

  useEffect(() => {
    setLimit(10)
    setOffset(0)
    listHeroes()
  }, [])

  const listHeroes = async () => {
    try {
      setLoader(true)
      const response = await getListHeroes({ limit: 10, offset: 0 })
      if (response?.data?.results && response?.data?.results?.length > 0) {
        setData(response?.data?.results)
      } else {
        setData([])
      }
    } catch (error) {
      return error
    } finally {
      setLoader(false)
    }
  }

  const scrollListHeroes = async () => {
    try {
      setLoaderPage(true)
      let count = offset + 10
      setOffset(offset + 10)
      const response = await getListHeroes({ limit, offset: count })
      if (response?.data?.results && response?.data?.results?.length > 0) {
        setData(prevItems => [...prevItems, ...response?.data?.results])
      } else {
        setMoreResults(false)
      }
    } catch (error) {
      return error
    } finally {
      setLoaderPage(false)
    }
  }

  const navigateDetail = async (data: ResultsHeroes) => {
    try {
      navigation.navigate('Detail', { data })
    } catch (error) {
      return error
    }
  }

  const logout = async () => {
    try {
      dispatch(deleteStore())
      navigation.navigate('Login')
    } catch (error) {
      return error
    }
  }

  return {
    data,
    loader,
    logout,
    userStore,
    loaderPage,
    moreResults,
    navigateDetail,
    scrollListHeroes
  }
}

export default useHome