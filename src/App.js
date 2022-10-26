
import './App.css';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import OrderReview from './component/OrderReview/OrderReview';
import GrandPa from './component/GrandPa/Grandpa'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orderreview' element={<OrderReview></OrderReview>}>home</Route>
        <Route path='/grandpa' element={<GrandPa></GrandPa>}>home</Route>
      </Routes>
    </div>
  );
}

export default App;
