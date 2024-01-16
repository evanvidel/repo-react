import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Repositorio from './pages/repositorio';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/repositorio/:repositorio" element={<Repositorio/>} />
      </Routes>
    </BrowserRouter>
  );
}

