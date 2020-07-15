import React, { useState, Fragment } from 'react';

const Contador = () => {
    
    const [numero, setNumero] = useState(0);

    const aumentar = () => {
        console.log('me diste un click')
        setNumero(numero + 1)
    }


    return ( 
        <Fragment>
            <h3>Este es el total de tus tareas { numero }</h3>
            <h4>Aumenta tus tareas con el botón de abajo</h4>
            <button onClick={ aumentar }>Aumentar</button>
        </Fragment>
      
     );
}
 
export default Contador;