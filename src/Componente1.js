import React from 'react'

export const Componente1 = () => {
  return (
    <div>
        
        <PrimoApproccio/>
        
    </div>
   
  )
}


const Persona = () => {

    return <h2 className='text-light'>CIAO SONO MARCO</h2>;
};

const Messaggio = () => {
    return <h5 className='text-primary'>CIAO A TUTTI</h5>
}

const PrimoApproccio = () => {
    return(
        <React.Fragment>

            <Persona/>
            <Messaggio/>
        </React.Fragment>
    )
}

export default Componente1;
