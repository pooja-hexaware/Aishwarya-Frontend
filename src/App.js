import logo from './logo.svg';
import './App.css';
import Home from './views/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Restaurants from './components/restaurants/restaurants';
import CouponValidation from './components/couponValidation/couponValidation';
import Menus from './components/menu/menu';
import Container from './views/Container';

function App() {
  return (
    <div >
        <Router>
          <Routes>
            
            <Route exact path="/" element={<Container><Restaurants/></Container>}/>
            <Route path="/menu" element={<Container><Menus/></Container>} />
            <Route path="/coupon" element={<Container><CouponValidation/></Container>} /> 
          </Routes>
        </Router>
    </div>
  );
}

export default App;
