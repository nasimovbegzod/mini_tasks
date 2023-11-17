import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import SinglePage from './SinglePage/SinglePage';
import Sorted from './Sorted/Sorted';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Single/:id' element={<SinglePage />} />
          <Route path='Sorted' element={<Sorted/>}/>
          <Route path='Contact' element={<Contact/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
