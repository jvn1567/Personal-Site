import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MainNav from './components/MainNav';

function App() {
  return (
    <BrowserRouter>
      <MainNav />
      <main>
        <Routes>
          <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
