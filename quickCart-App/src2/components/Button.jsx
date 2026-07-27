export default function Button({ children, onClick, variant = 'primary' }) {  
  const variantClass = {  
    primary: 'btn-primary',  
    danger: 'btn-danger',  
    outline: 'btn-outline',  
  };  
  
  return (  
    <button onClick={onClick} className={`btn ${variantClass[variant]}`}>  
      {children}  
    </button>  
  );  
}   