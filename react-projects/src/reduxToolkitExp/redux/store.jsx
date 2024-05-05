import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
//ProductSlice mesela böyle bir slice'ımız varsa burada tanımlayıp kullanabiliyoruz.

export const store = configureStore({
  reducer: {
    counter: counterReducer
    //buraya istediğim kadar reducer koyabilirim
  },
})