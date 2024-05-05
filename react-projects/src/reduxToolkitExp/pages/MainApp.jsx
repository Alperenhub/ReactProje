import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { decrement, increment } from '../redux/counterSlice';


const MainApp = () => {
//bir slice'ın içindeki state'e erişmek için aşağıdaki yöntemi izleriz (useSelector).
    const {value} = useSelector((store)=> store.counter);
    console.log(value)

//slice'ın içindeki fonksiyonlara erişmek içinse useDispatch kullanırız.
const dispatch = useDispatch();

  return (
    <div>
      <div>
        {value}
      </div>
      <div>
      <button onClick={()=>dispatch(increment())}>artır</button>
      <button onClick={()=>dispatch(decrement())}>azalt</button>
      </div>
    </div>
  )
}

export default MainApp
