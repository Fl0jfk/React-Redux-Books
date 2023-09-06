import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddBooks from './containers/AddBooks';
import SearchBooks from './containers/SearchBooks';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={<AddBooks/>}/>
            <Route path='/search' element={<SearchBooks/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
