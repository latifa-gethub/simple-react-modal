
 # simple React modal library created using `create-react-app`.

 The React Modal component is a reusable component that allows displaying a modal window in a React application.

## Exemples:
![alt text](<public/assets/Sans titre.png>)
## Installing the package in your project:

`npm install simple-react-modal-lw`

## Prerequisites :
* Node.js v9.5.1

## Dependencies to install : 
* "react": "^18.2.0"
* "react-dom":  "^18.2.0"
* "prop-types": "^15.8.1"

## Usage :
```javascript
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
```

## Props :
The Modal component accepts the following props:
* isOpen (boolean, required): Determines whether the modal is open or closed.
* onClose (function, required): Function called when the user closes the modal.
* contentModal (strind):Text you want to display in the Content Modal
* styleTitleModal (cssPropertie):Style to use for Header title Modal 
* titlHeaderModal(string): Title you want to display in Header Modal.
* styleModal(cssProperties): Style to use for global Modal container

## Keywords : 
 `simple` `react` `modal` `lw`