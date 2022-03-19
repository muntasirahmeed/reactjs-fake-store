import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './Components/Menubar/Menubar';
import AllProducts from './Components/AllProducts/AllProducts';
import { useState } from 'react';

function App() {
  const [count, setCount]=useState(0)
  const increaseCount = () => setCount(count + 1);
  return (
    <div className='container'>
      <Menubar count ={count}></Menubar>
      <AllProducts addPd={increaseCount}></AllProducts>
    </div>
  );
}

export default App;
