import React from 'react';
import ShelterBoxComponent from './ComponentsHome/ShelterBoxComponent';
import CardGridComponent from './ComponentsHome/CardGridComponent';
import HistComponent from './ComponentsHome/HistoriaCard.js'
import OndeTrabalhamos from './ComponentsHome/OndeTrabalhamos';

 function Home(){
    return (

        <div>
          <HistComponent/>
          <OndeTrabalhamos/>
          <CardGridComponent/>
          <ShelterBoxComponent/> 
         </div>
    )

}
export default Home;
// vo trancar o curso