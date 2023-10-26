import React from 'react';


// ASSEGNIAMO IL PARAMETRO PROPS ALLA FUNZIONE 
function FirstCard(props) {
  //  DECONSTRUCT DELL'OBJECT CONTENUTO NELLE PROPS
  const {nome, img, description} = props
  
  // facciamo una funzione che richiameremo nell'evento
  const ClickMe = () =>{
    console.log(`BRAVOOOOO hai selezionata l immagine riguardante ${nome}`)

  }
  return (
    <div>
        <div className='container-card mb-4'>
            <div className='p-3'>
              {/* INSERIAMO ALL'INTERNO DEI TAG LE PROPS  CONTENENTE IL PARAMETRO DELL'OBJECT IN APP.JS */}
                <h4 className=' text-center pt-2'>{nome}</h4>
                <img onClick={ClickMe} src={img} width='250px' height={'150px'}/>
                <hr/>
                <p className='text-light pt-1'>{description}</p>
                <button onClick={() =>  alert(`bravo sei a ${nome}`)} className="btn btn-danger">scopri dove mi trovo</button>
                
            </div>
           
        </div>
    </div>
  )
}

export default FirstCard