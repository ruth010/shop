import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import UserPage from './pages/UserPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/css/grid.css';
import './assets/css/main.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/Admin" element={<Admin />} />
          <Route path="/" element={<Home />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route path="/UserPage" element={<UserPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
