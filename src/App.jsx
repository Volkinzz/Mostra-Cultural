import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MostraCultural from './MostraCultural';

import Dicionario from './Dicionario';
import Novoacordo from './Novoacordo';
import Personalidades from './Personalidades';
import Poema from './Poema';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MostraCultural />} />
      <Route path="/dicionario" element={<Dicionario />} />
      <Route path="/poema" element={<Poema />} />
      <Route path="/personalidades" element={<Personalidades />} />
      <Route path="/novoacordo" element={<Novoacordo />} />
    </Routes>
  );
}

export default App;