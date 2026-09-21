import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Catalogo from './pages/Catalogo';
import CatalogoMotos from './pages/CatalogoMotos';
import CatalogoNautica from './pages/CatalogoNautica';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden bg-zinc-50 text-zinc-800">
        <Header />
        <main className="max-w-6xl mx-auto px-6 py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/catalogo/motocicletas" element={<CatalogoMotos />} />
            <Route path="/catalogo/nautica" element={<CatalogoNautica />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
