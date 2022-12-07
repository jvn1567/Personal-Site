import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MainNav from './components/MainNav';

function App() {
  return (
    <BrowserRouter>
      <MainNav />
      <main>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
