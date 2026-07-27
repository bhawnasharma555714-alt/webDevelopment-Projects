import {Link} from 'react-router-dom';
import Cart from '../pages/Cart';
import { useTheme } from '../context/ThemeContext';  
import { useCartStore } from '../store/useCartStore';  
import { useMemo } from 'react';

export default function Navbar(){
    const {darkMode, toggleTheme} = useTheme();
    const cartItems = useCartStore((state) => state.cartItems);

    const totalItems = useMemo(
        () => cartItems.reduce((sum,item) => sum + item.quantity, 0),
        [cartItems]
    );

    return (
        <nav className = "navbar">
            <Link to="/" className = "navbar-brand">QuickKart</Link>

            <div className="navbar-links">
                <Link to="./cart" className="cart-link">
                    Cart
                    {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
                </Link>

                <button onClick={toggleTheme} className="theme-btn">
                    {darkMode? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>

        </nav>
    );
}