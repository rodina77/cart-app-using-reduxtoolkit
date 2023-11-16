import './App.css';
import { Routes, Route } from 'react-router-dom';
import Example from './components/tailwind';
import Nav_bar from './components/nav-bar';
import Products from './components/product';
import Cart from './components/cart';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav_bar></Nav_bar>
      <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/products" element={<Products />} />
       </Routes>
      </header>
    </div>
  );
}

export default App;
