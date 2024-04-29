import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Room from './Components/Room';

function App() {
  return (
    <div  className='body'>
    <BrowserRouter>
    <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/roomPage/:roomID' element={<Room/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
