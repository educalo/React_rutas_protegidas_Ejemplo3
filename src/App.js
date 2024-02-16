import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import ProtectedRoute from './components/utils/ProtectedRoute';
import { useLocalStorage } from 'react-use';

function App() {

  //almacenar datos de user en localStorage
  const [user, setUser] = useLocalStorage('user');

  //componente ProtectedRoute que esta dentro de la carpeta /util
  //si el usario existe en el localStorage se carga sino vuelve al principio
  return (
    <BrowserRouter>
      <div className="container mt-5">
        <Routes>
          <Route element={<ProtectedRoute canActivate={user} redirectPath='/login' />}>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
          </Route>
          <Route path='login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
