import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage';
import AdPage from '../pages/AdPage/AdPage';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/ads/:adId' element={<AdPage />} />
    </Routes>
  );
}
