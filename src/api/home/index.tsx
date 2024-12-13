import { api } from '../../utils/useApi'
import { hash, marvelKey, ts } from '../../environment'
import { ListHeroesRequest, ListHeroesResponse } from '../../dto/home'

const homeApi = () => {
  const key = marvelKey

  const getListHeroes = async (data: ListHeroesRequest): Promise<ListHeroesResponse> => {
    try {
      const response: any = await api.get(`characters?limit=${data?.limit}&offset=${data?.offset}&ts=${ts}&apikey=${key}&hash=${hash}`)
      return response.data
    } catch (error: any) {
      return error
    }
  }

  return {
    getListHeroes
  }
}

export default homeApi