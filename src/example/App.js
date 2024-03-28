 
import { useState } from 'react'; 
import Modal from '../lib/Modal'; 
function App() {
  const [isOpen,setIsOpen]=useState(false)  
  return (
    <>   
    <button onClick={()=>setIsOpen(true)}>Open modal</button>
     <Modal isOpen={isOpen} 
            onClose={function(){setIsOpen(false)}} 
            contentModal={'contentModal'} 
            styleTitleModal={{color:'transparent'}} 
            titlHeaderModal={'titleModal'}
            styleModal={{height:'200px',borderRadius:'5px',
                         boxShadow:'5px 5px 5px #9a9595'}}/>
    </>    
  );
}
export default App;
