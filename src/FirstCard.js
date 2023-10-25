import React from 'react';


// ASSEGNIAMO IL PARAMETRO PROPS ALLA FUNZIONE 
function FirstCard(props) {
  return (
    <div>
        <div className='container-card mb-4'>
            <div className='p-3'>
              {/* INSERIAMO ALL'INTERNO DEI TAG LE PROPS CON IL NOME DELLA VARIABILE CONTENENTE IL PARAMTRO DELL'OBJECT IN APP.JS */}
                <h4 className='text-primary text-center pt-2'>{props.nome}</h4>
                <img src={props.Img} width='250px'/>
                <p className='text-light'>{props.description}</p>
            </div>
            
        </div>
    </div>
  )
}

export default FirstCard