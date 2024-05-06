import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import userReducer from './userSlice'
//ProductSlice mesela böyle bir slice'ımız varsa burada tanımlayıp kullanabiliyoruz.

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
    //buraya istediğim kadar reducer koyabilirim
  },
})