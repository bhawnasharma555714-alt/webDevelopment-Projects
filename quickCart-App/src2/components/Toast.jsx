import { useEffect } from 'react';  
  
export default function Toast({ message, show, onHide }) {  
  // useEffect: auto-hide the toast after 2 seconds, with cleanup  
  useEffect(() => {  
    if (show) {  
      const timer = setTimeout(() => onHide(), 2000);  
      return () => clearTimeout(timer); // cleanup avoids hiding a stale toast  
    }  
  }, [show, onHide]);  
  
  if (!show) return null; // conditional rendering  
  
  return <div className="toast">{message}</div>;  
}  