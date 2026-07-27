import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
// import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetail";
import { Link, Route, Routes } from "react-router-dom";
function App(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/cart/checkout" element={<Checkout/>} />
                <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
        </div>
    );
}
export default App;