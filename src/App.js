import './assets/css/App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Tabla from './components/Tabla';
import MostrarCarrito from './components/MostarCarrito';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider> 
      <div className="center">
      <div><Sidebar></Sidebar></div>
      <div><MostrarCarrito></MostrarCarrito></div>  
      </div> 
    </div>
  );
}

export default App;
