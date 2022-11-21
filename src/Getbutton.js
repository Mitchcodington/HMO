
import React from 'react';
import Modal from '@material-ui/core/Modal';
import Empremium from './Empremium';
  
export default function App() {
  
  const [open, setOpen] = React.useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };
    
  const handleOpen = () => {
    setOpen(true);
  };
  
  
  return (
    <div className="getbutton-main" style={{ display: 'block', padding: 30 }}>
      <button className="business-btn" type="button" 
      onClick={handleOpen}>
        Learn More
      </button>
      <Modal
        onClick={handleClose}
        open={open}
      >
        <div className="empremium">
        <Empremium/>
        </div>
        
      </Modal>
    </div>
  );
}