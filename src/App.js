import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar/Menubar';
import AllProducts from './Components/AllProducts/AllProducts';
import { useState } from 'react';

function App() {
  const [count, setCount]=useState(0)
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count-1)
    }
    else {
      setCount(count-0)
    }
  }
  return (
    <div className='container'>
      <Menubar count ={count}></Menubar>
      <AllProducts addPd={increaseCount} dltPd={decreaseCount}></AllProducts>
    </div>
  );
}

export default App;
