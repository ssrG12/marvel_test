import { UserDTO } from './login'

export interface Store {
  userStore: UserStore
}

export interface UserStore {
  user: UserDTO
}