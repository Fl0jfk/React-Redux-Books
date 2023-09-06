import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddBooks from './containers/AddBooks';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AddBooks/>
      <Footer/>
    </div>
  );
}

export default App;
