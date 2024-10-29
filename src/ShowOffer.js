import { useState } from 'react'
import './ShowOffer.css'
import CheckOffer from './CheckOffer';
import Accepted from './Accepted';

const ShowOffer = ()=>{

    const [showOffer,setShowOffer] = useState(false);
    const [closeoffer,setcloseOffer] = useState(false);
    const [acceptedoffer,setacceptOffer] =  useState(false);

    const handleShowOffer = ()=>{
        setShowOffer(true);

    }

    const closeOfferfunction = ()=>{
       setShowOffer(false)

    }

    const acceptOffer = ()=>{
        setacceptOffer(true)
        setShowOffer(false)
    }
return (
    <div className="showOfferContainer">
        <button onClick={handleShowOffer} className="btn">ShowOffer</button>
       { showOffer&&<CheckOffer acceptOffer = {acceptOffer} closeOfferfunction ={closeOfferfunction} />}
       {acceptedoffer && <Accepted/>}
       
    </div>
    
)

}

export default ShowOffer

