import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './component/ProductList';
import Cart from './component/Cart';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> 
        </nav>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
