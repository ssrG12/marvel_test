import { ResultsHeroes } from './home'

export type RootStackParamList = {
  Home: undefined
  Login: undefined
  Splash: undefined
  Detail: { data: ResultsHeroes }
}