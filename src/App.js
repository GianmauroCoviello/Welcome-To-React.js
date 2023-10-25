// import Componente1 from './Componente1';

import FirstCard from "./FirstCard";

// USO DELLE PROPS CON L AUSILIO DI OBJECT JAVASCRIPT
let PrimaCard = {

  nome: 'ROMA',
  img: 'http://traveldigg.com/wp-content/uploads/2016/05/Colosseum-Photography.jpg',
  description: 'Cè tempo fino alle ore 12.00 del 2 novembre 2023 per presentare i progetti che verranno selezionati per gli spettacoli da realizzare nel Sistema Musei di Roma Capitale. Sarà infatti il 25 novembre l’appuntamento di quest’anno con la nuova edizione di Musei in Musica, uno dei fiori all’occhiello del programma culturale e di intrattenimento capitolino.'.toLocaleUpperCase()

}

let SecondaCard = {

  nome: 'MILANO',
  img: 'https://images2-milano.corriereobjects.it/methode_image/2015/02/18/Milano/Foto%20Gallery/duomo_LI34321_2_MGZOOM.jpg',
  description: 'Cè tempo fino alle ore 12.00 del 2 novembre 2023 per presentare i progetti che verranno selezionati per gli spettacoli da realizzare nel Sistema Musei di Roma Capitale. Sarà infatti il 25 novembre l’appuntamento di quest’anno con la nuova edizione di Musei in Musica, uno dei fiori all’occhiello del programma culturale e di intrattenimento capitolino.'.toLocaleUpperCase()

}



function App() {
  return (
    <div className="App ">
      <h1 className="my-3">LA MIA PRIMA CARD CON COMPONENTI</h1>
      
      <div className="d-flex flex-wrap justify-content-center ">
		{/* RICHIAMIAMO I PARAMETRI DEGLI OBJECT ALL'INTERNO DELLE COMPONENTI */}
		{/* USIAMO LO SPREAD OPERATOR PER RICHIAMARE I PARAMETRI */}
        <FirstCard {...PrimaCard}/>
        <FirstCard {...SecondaCard}/>
        
        
      </div>
      

      {/* <Componente1></Componente1> */}
    </div>
  );
}

export default App
