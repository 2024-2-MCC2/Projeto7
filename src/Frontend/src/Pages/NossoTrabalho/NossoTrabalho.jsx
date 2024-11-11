import React from "react";
import { Link } from "react-router-dom";
import OurWorkSection from "./ComponentsNossoTrabalho/OurWorkSection";
import VideoSection from "./ComponentsNossoTrabalho/VideoSection";

function NossoTrabalho (){
return(
<div className="main-content">
  <OurWorkSection/>
  <VideoSection/>  
</div>
)
}
export default NossoTrabalho