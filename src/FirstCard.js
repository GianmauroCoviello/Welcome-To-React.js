import React, { useState } from 'react';
import Cards from './Cards';



// ASSEGNIAMO IL PARAMETRO PROPS ALLA FUNZIONE 
function FirstCard(props) {
  //  DECONSTRUCT DELL'OBJECT CONTENUTO NELLE PROPS
  const {nome, img, description, id, derby} = props
  
  // facciamo una funzione che richiameremo nell'evento
  // funzione con doppio funzione
  
  // singola funzione
  const ClickMe1 = (City)=>{
   
    console.log(City)
    

  }
// destrutturazione del console log prendendo solamente la funzione log dal console.log
  const {log} = console
  // log(useState(nome))

  const [Derby, cambiaSquad] = useState(derby)

  
  let button = document.getElementsByClassName('derby')


  const updateSquad = ()=>{

    if (Derby === derby) {
      cambiaSquad('')
      
    } else{
      cambiaSquad(derby)
      let game = Derby
      

      

    }
   

  }

  return (
    <div>
        <div className='container-card mb-4 boxShadow'>
            <div className='p-3' key={id}>
              {/* INSERIAMO ALL'INTERNO DEI TAG LE PROPS  CONTENENTE IL PARAMETRO DELL'OBJECT IN APP.JS */}
                <h4 className=' text-center pt-2'>{nome}</h4>
                <img onClick={()=>ClickMe1(nome)} src={img} width='250px' height={'150px'}/>
                <hr/>
                <p className='text-dark text-center pt-1'>{description}</p>
                <button onClick={updateSquad} type='button' className='btn derby btn-primary text-center'>scopri il derby</button>
                <p className='text-success' ><strong>{Derby}</strong></p>
            
            </div>
           
        </div>
    </div>
  )
}

export default FirstCard