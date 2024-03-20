import type { RootState } from '../redux/Store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/features/counter/counterSlice'

const Home = () => {

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"   onClick={() => dispatch(increment())}>
          Increament
        </button>
  
      <div>
        <h1>{count}</h1>
      </div>
   
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Home;
