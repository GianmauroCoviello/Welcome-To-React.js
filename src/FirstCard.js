import React from 'react';


// ASSEGNIAMO IL PARAMETRO PROPS ALLA FUNZIONE 
function FirstCard(props) {
  return (
    <div>
        <div className='container-card mb-4'>
            <div className='p-3'>
              {/* INSERIAMO ALL'INTERNO DEI TAG LE PROPS  CONTENENTE IL PARAMETRO DELL'OBJECT IN APP.JS */}
                <h4 className='text-primary text-center pt-2'>{props.nome}</h4>
                <img src={props.img} width='250px' height={'150px'}/>
                <p className='text-light'>{props.description}</p>
            </div>
           
        </div>
    </div>
  )
}

export default FirstCard