import React from 'react';
import ShelterBoxComponent from './components/slider/ShelterBoxComponent';
import CardGridComponent from './components/CardGridComponent';
import HistoriaCard from './components/HistoriaCard'
import OndeTrabalhamos from './components/OndeTrabalhamos';

 function Home(){
    return (

        <div>
          <HistoriaCard />
           <OndeTrabalhamos />
         <CardGridComponent />
           <ShelterBoxComponent /> 
        
         </div>
    )

}
export default Home;
// vo trancar o curso