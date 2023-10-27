// import Componente1 from './Componente1';

import FirstCard from "./FirstCard";
import Cards from "./Cards";

// USO DELLE PROPS CON L AUSILIO DI ARRAY DI OBJECT JAVASCRIPT



function App() {
// primo esempio di array
//   let arr = ['marcus', 'nino', 'marco','yyuppy']
  return (
    <div className="App ">
      <h1 className="my-3">LA MIA PRIMA CARD CON COMPONENTI</h1>
      
      <div className="d-flex flex-wrap justify-content-center ">
		{/* RICHIAMIAMO I PARAMETRI DEGLI OBJECT ALL'INTERNO DELLE COMPONENTI */}
		{/* USIAMO LO SPREAD OPERATOR(...nome della variabile) PER RICHIAMARE I PARAMETRI */}
        {/* <FirstCard {...PrimaCard}>
			{/* INSERIAMO UN CHILDREN */}
			{/* <a className={"BTN BTN-PRIMARY".toLocaleLowerCase()} href="www.getyourguide.it/Roma/Attività">SCPRI COME VENIRE A TROVARCI</a>
		</FirstCard> */} 
        
		{/* esempio di mappatura e scomposizione di un array */}
		{/* <p className="text-success">{arr.map((el)=> <h2>{el}</h2>)}</p> */}
        
		{/* mappo l'array di oggetti e returno la componente firstcard e con lo apread operator prendo le props quindi in parametri dell'array di oggetti */}
        {Cards.map((card)=>{
			// metodo 1 per destrutturare la key attraverso l'id
			// const {id} = card
			// metodo 2
			return (
				<FirstCard key={card.id} {...card}/>
				
			) 
			
		})}

		
      </div>
      

      {/* <Componente1></Componente1> */}
    </div>
  );
}

export default App
