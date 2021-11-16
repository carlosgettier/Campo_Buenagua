
import './App.css';
import { Contacto } from './components/Contacto/Contacto';
import { Footer } from './components/Footer/Footer';
import { NavBar } from './components/NavBar/NavBar';
import { Ubicacion } from './components/Ubicacion/Ubicacion';
import { Video } from './components/Video/Video';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Video />
      <Ubicacion />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
