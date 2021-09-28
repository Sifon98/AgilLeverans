import React from 'react';
import DesktopHeader from '../components/DesktopHeader';
import MobileHeader from '../components/HomePage/MobileHeader';


function Confirmation() {

  return (
    <div className="conteiner">

      <div className="header">
        <DesktopHeader />
        <MobileHeader />
      </div>
      <div className="bodyConteiner">
        <div className="textConteiner">
          <h1 className="thanku-text">Thank you for your purchase!</h1>
          <p className="order-text">your order was completed successfully.</p>
          <p className="order-text">you will soon get a confirmation e-mail.</p>
        </div>
      </div>
    </div>
  )
}

export default Confirmation