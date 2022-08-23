
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './component/Home/Home';
import Nav from './component/Shared/Nav';
import NotFound from './component/Shared/NotFound';
import Blog from './component/Blog/Blog';
function App() {
  return (
    <div>
    
      <h1 className='text-3xl font-bold text text-center mt-5 text-lime-400'>Hello Rasel</h1>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
