import Button from './Button';  
  
export default function Modal({ isOpen, onClose, title, children }) {  
  if (!isOpen) return null; // conditional rendering  
  
  return (  
    <div className="modal-overlay">  
      <div className="modal-box">  
        <h3 className="modal-title">{title}</h3>  
        {children}  
        <Button onClick={onClose} variant="outline">Close</Button>  
      </div>  
    </div>  
  );  
}  