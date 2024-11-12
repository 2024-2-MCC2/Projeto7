import React from "react";
import { Link } from "react-router-dom";
import OurWorkSection from "./ComponentsNossoTrabalho/OurWorkSection";
import VideoSection from "./ComponentsNossoTrabalho/VideoSection";
import GridSection from "./ComponentsNossoTrabalho/GridSection";
import WhyShelter from "./ComponentsNossoTrabalho/WhyShelter.jsx";

function NossoTrabalho (){
return(
<div className="main-content">
  <OurWorkSection/>
  <VideoSection/>
  <GridSection/>
  <WhyShelter/>
</div>
)
}
export default NossoTrabalho