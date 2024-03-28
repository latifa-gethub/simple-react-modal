 
import { useState } from 'react';
 
import Modal from './lib/Modal';
 

function App() {
  const [isOpen,setIsOpen]=useState(false)
 const onClose=()=>{
  setIsOpen(false)
 }
  return (
    <>
   
    <button onClick={()=>setIsOpen(true)}>button</button>
     <Modal isOpen={isOpen} onClose={onClose} 
     content={'connected'} styleTitleModal={{color:'white'}} titlHeaderModal={'argent'}
     styleModal={{backgroundColor:'blue',height:'100px',borderRadius:'5px',
     boxShadow:'10px 5px 5px white'}}/>
    </>
    
  );
}

export default App;
