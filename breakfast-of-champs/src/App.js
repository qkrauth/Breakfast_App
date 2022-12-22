import './App.css';
import Header from './components/Header';
import {Routes, Route} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import OrderScreen from './screens/OrderScreen';
import ReceiptScreen from './screens/ReceiptScreen';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<HomeScreen />}/>
        <Route path="/cart" element={<CartScreen />}/>
        <Route path="/order" element={<OrderScreen />}/>
        <Route path="/order/:favorite" element={<OrderScreen />}/>
        <Route path="/thankyou" element={<ReceiptScreen />} />
      </Routes>
    </div>
  );
}

export default App;
