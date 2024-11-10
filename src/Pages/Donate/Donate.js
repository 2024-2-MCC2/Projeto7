import React from 'react';
import DonateBanner from './DonateComponents/DonateBanner' 
import DonationComponent from './DonateComponents/DonationComponent';
import SupportComponent from './DonateComponents/SupportComponent'


function Donate() {
  return (
    <div className="App">
      <DonateBanner/> 
      <DonationComponent/> 
      <SupportComponent/>
    </div>
  );
}
export default Donate;