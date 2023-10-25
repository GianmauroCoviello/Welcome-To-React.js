import React from 'react';


// ASSEGNIAMO IL PARAMETRO PROPS ALLA FUNZIONE 
function FirstCard(props) {
  //  DECONSTRUCT DELL'OBJECT CONTENUTO NELLE PROPS
  // richiamiamo il children all'interno del deconstructor
  const {nome, img, description, children} = props
  return (
    <div>
        <div className='container-card mb-4'>
            <div className='p-3'>
              {/* INSERIAMO ALL'INTERNO DEI TAG LE PROPS  CONTENENTE IL PARAMETRO DELL'OBJECT IN APP.JS */}
                <h4 className='text-primary text-center pt-2'>{nome}</h4>
                <img src={img} width='250px' height={'150px'}/>
                <p className='text-light'>{description}</p>
                {children}
            </div>
           
        </div>
    </div>
  )
}

export default FirstCard