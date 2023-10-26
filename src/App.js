// import Componente1 from './Componente1';

import FirstCard from "./FirstCard";

// USO DELLE PROPS CON L AUSILIO DI ARRAY DI OBJECT JAVASCRIPT
let Cards = [
	{

		nome: 'ROMA',
		img: 'http://traveldigg.com/wp-content/uploads/2016/05/Colosseum-Photography.jpg',
		description: 'Cè tempo fino alle ore 12.00 del 2 novembre 2023 per presentare i progetti che verranno selezionati per gli spettacoli da realizzare nel Sistema Musei di Roma Capitale. Sarà infatti il 25 novembre l’appuntamento di quest’anno con la nuova edizione di Musei in Musica, uno dei fiori all’occhiello del programma culturale e di intrattenimento capitolino.'.toLocaleUpperCase()
		
	},
	{
	  
		nome: 'MILANO',
		img: 'https://images2-milano.corriereobjects.it/methode_image/2015/02/18/Milano/Foto%20Gallery/duomo_LI34321_2_MGZOOM.jpg',
		description: 'Cè tempo fino alle ore 12.00 del 2 novembre 2023 per presentare i progetti che verranno selezionati per gli spettacoli da realizzare nel Sistema Musei di Roma Capitale. Sarà infatti il 25 novembre l’appuntamento di quest’anno con la nuova edizione di Musei in Musica, uno dei fiori all’occhiello del programma culturale e di intrattenimento capitolino.'.toLocaleUpperCase()
	  
	},
	{
		nome: 'LAVELLO',
		img: 'https://2.bp.blogspot.com/-KeUhV3cgpXM/VyJ01D6rSpI/AAAAAAAAj7c/yHLqwI-WGEMpaVGQQmnCoiNuSS4XezbBgCLcB/s1600/Lavello%2Bistituto%2Bcomprensivo%2B1%2BIMG_1443.jpg',
		description: 'Lavello - Basilicata Turistica È uno dei comuni della splendida area del Vulture e in esso si concentrano diversi luoghi di interesse storico-artistico che testimoniano le sue antiche origini.'
	},
	{

		nome: 'ROMA',
		img: 'http://traveldigg.com/wp-content/uploads/2016/05/Colosseum-Photography.jpg',
		description: 'Cè tempo fino alle ore 12.00 del 2 novembre 2023 per presentare i progetti che verranno selezionati per gli spettacoli da realizzare nel Sistema Musei di Roma Capitale. Sarà infatti il 25 novembre l’appuntamento di quest’anno con la nuova edizione di Musei in Musica, uno dei fiori all’occhiello del programma culturale e di intrattenimento capitolino.'.toLocaleUpperCase()
		
	},
	{
	  
		nome: 'MILANO',
		img: 'https://images2-milano.corriereobjects.it/methode_image/2015/02/18/Milano/Foto%20Gallery/duomo_LI34321_2_MGZOOM.jpg',
		description: 'Cè tempo fino alle ore 12.00 del 2 novembre 2023 per presentare i progetti che verranno selezionati per gli spettacoli da realizzare nel Sistema Musei di Roma Capitale. Sarà infatti il 25 novembre l’appuntamento di quest’anno con la nuova edizione di Musei in Musica, uno dei fiori all’occhiello del programma culturale e di intrattenimento capitolino.'.toLocaleUpperCase()
	  
	},
	{
		nome: 'LAVELLO',
		img: 'https://2.bp.blogspot.com/-KeUhV3cgpXM/VyJ01D6rSpI/AAAAAAAAj7c/yHLqwI-WGEMpaVGQQmnCoiNuSS4XezbBgCLcB/s1600/Lavello%2Bistituto%2Bcomprensivo%2B1%2BIMG_1443.jpg',
		description: 'Lavello - Basilicata Turistica È uno dei comuni della splendida area del Vulture e in esso si concentrano diversi luoghi di interesse storico-artistico che testimoniano le sue antiche origini.'
	},
]



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
		</FirstCard> */} */}
        
		{/* esempio di mappatura e scomposizione di un array */}
		{/* <p className="text-success">{arr.map((el)=> <h2>{el}</h2>)}</p> */}
        
		{/* mappo l'array di oggetti e returno la componente firstcard e con lo apread operator prendo le props quindi in parametri dell'array di oggetti */}
        {Cards.map((card)=>{
			return <FirstCard {...card}/>
		})}
      </div>
      

      {/* <Componente1></Componente1> */}
    </div>
  );
}

export default App
