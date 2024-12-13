import { api } from '../../utils/useApi'
import { hash, marvelKey, ts } from '../../environment'
import { DetailRequest, DetailResponse } from '../../dto/detail'

const detailApi = () => {
  const key = marvelKey

  const getListComics = async (data: DetailRequest): Promise<DetailResponse> => {
    try {
      const response: any = await api.get(`characters/${data?.id}/comics?limit=${data?.limit}&offset=${data?.offset}&ts=${ts}&apikey=${key}&hash=${hash}`)
      return response.data
    } catch (error: any) {
      return error
    }
  }

  return {
    getListComics
  }
}

export default detailApi