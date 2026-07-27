import { useState } from 'react';  
import { useNavigate } from 'react-router-dom';  
import { useCartStore } from '../store/useCartStore';  
import Button from '../components/Button';  
  
export default function Checkout() {  
  const navigate = useNavigate();  
  const clearCart = useCartStore((state) => state.clearCart);  
  
  const [form, setForm] = useState({ name: '', city: '', pincode: '' });  
  const [errors, setErrors] = useState({});  
  
  const handleChange = (e) => {  
    setForm({ ...form, [e.target.name]: e.target.value }); // controlled inputs  
  };  
  
  const validate = () => {  
    const newErrors = {};  
    if (!form.name.trim()) newErrors.name = 'Name is required';  
    if (!form.city.trim()) newErrors.city = 'City is required';  
    if (!/^\d{6}$/.test(form.pincode)) newErrors.pincode = 'Enter a valid 6-digit pincode';  
    return newErrors;  
  };  
  
  const handleSubmit = (e) => {  
    e.preventDefault();  
    const newErrors = validate();  
    setErrors(newErrors);  
  
    if (Object.keys(newErrors).length === 0) {  
      alert(`Order placed for ${form.name}! Delivering to ${form.city}.`);  
      clearCart();  
      navigate('/');  
    }  
  };  
  
  return (  
    <form onSubmit={handleSubmit} className="checkout-form">  
      <h3>Delivery Details</h3>  
  
      <input  
        name="name"  
        placeholder="Full name, e.g. Suresh Kumar"  
        value={form.name}  
        onChange={handleChange}  
        className="form-input"  
      />  
      {errors.name && <p className="error-text">{errors.name}</p>}  
  
      <input  
        name="city"  
        placeholder="City, e.g. Pune"  
        value={form.city}  
        onChange={handleChange}  
        className="form-input"  
      />  
      {errors.city && <p className="error-text">{errors.city}</p>}  
  
      <input  
        name="pincode"  
        placeholder="Pincode, e.g. 411001"  
        value={form.pincode}  
        onChange={handleChange}  
        className="form-input"  
      />  
      {errors.pincode && <p className="error-text">{errors.pincode}</p>}  
  
      <Button>Place Order</Button>  
    </form>  
  );  
}  