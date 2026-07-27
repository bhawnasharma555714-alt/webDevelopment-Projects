import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Button from './components/Button';
import ProductDetail from './pages/ProductDetail';
console.log('App Started');
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <Navbar/>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>
)