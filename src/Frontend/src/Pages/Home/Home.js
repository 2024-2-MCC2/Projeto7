import React from 'react';
import ShelterBoxComponent from './ComponentsHome/ShelterBoxComponent';
import CardGridComponent from './ComponentsHome/CardGridComponent';
import HistComponent from './ComponentsHome/HistoriaCard.js'
import OndeTrabalhamos from './ComponentsHome/OndeTrabalhamos';
import CarouselComponent from './ComponentsHome/CarouselComponent.jsx';

 function Home(){
    return (

        <div className="main-content">
          <CarouselComponent/>
          <OndeTrabalhamos/>
          <CardGridComponent/>
          {/* <HistComponent/> */}
          <ShelterBoxComponent/> 
         </div>
    )

}
export default Home;
// vo trancar o curso