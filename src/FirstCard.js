import React from 'react';


// ASSEGNIAMO IL PARAMETRO PROPS ALLA FUNZIONE 
function FirstCard(props) {
  //  DECONSTRUCT DELL'OBJECT CONTENUTO NELLE PROPS
  const {nome, img, description, id} = props
  
  // facciamo una funzione che richiameremo nell'evento
  // funzione con doppio funzione
  const ClickMe = (descrizione) => (e) =>{
    console.log(e.target.innerText)
    console.log(descrizione)
    

  }

  // singola funzione
  const ClickMe1 = (City)=>{
   
    console.log(City)
    

  }
  return (
    <div>
        <div className='container-card mb-4 boxShadow'>
            <div className='p-3'>
              {/* INSERIAMO ALL'INTERNO DEI TAG LE PROPS  CONTENENTE IL PARAMETRO DELL'OBJECT IN APP.JS */}
                <h4 className=' text-center pt-2'>{nome}</h4>
                <img onClick={()=>ClickMe1(id)} src={img} width='250px' height={'150px'}/>
                <hr/>
                <p className='text-light pt-1'>{description}</p>
                <div>
                  <button onClick={() =>  alert(`bravo sei a ${nome}`)} className="btn btn-danger">scopri dove mi trovo</button>
                  <button className='btn btn-success' onClick={ClickMe(nome)}>Questa è</button>
                </div>
                
            </div>
           
        </div>
    </div>
  )
}

export default FirstCard