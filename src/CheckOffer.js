import React from 'react'

import './CheckOffer.css'
function CheckOffer({closeOfferfunction,acceptOffer}) {
    console.log(closeOfferfunction)

  return (
    <div className='checkOfferContainer'>
        <h1 onClick={closeOfferfunction}>❌</h1>
        <p>Click the button below to accept our offer</p>
        <button onClick={acceptOffer} className='accept'>Accept Offer</button>

    </div>
  )
}

export default CheckOffer