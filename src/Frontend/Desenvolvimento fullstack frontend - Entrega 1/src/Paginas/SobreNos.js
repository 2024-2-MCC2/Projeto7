import React from "react";
import sobre from "./Styles/SobreNos.css"

 function SobreNos(){
    return( 
        <paginaSobre>
              <div className="texto">
    <h1> Quem somos nós?</h1>
    <p> paragrafo que explica sobre a instituição :D </p>
        </div>
        <div className="sobre">
            {/*imagem  */}
        </div>
        </paginaSobre>
    );
}
export default SobreNos;