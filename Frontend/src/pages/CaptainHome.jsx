import React from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useState } from 'react'
import gsap from 'gsap'
import { useGSAP} from '@gsap/react'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'


const CaptainHome = () => {
  const[ridePopupPanel, setRidePopupPanel] = useState(true)  
  const[confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false) 
  const ridePopupPanelRef = React.useRef(null)
   const ConfirmRidePopupPanelRef = React.useRef(null)


  useGSAP(function(){
    if(ridePopupPanel){
      gsap.to(ridePopupPanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(ridePopupPanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[ridePopupPanel])

    useGSAP(function(){
    if(confirmRidePopupPanel){
      gsap.to(ConfirmRidePopupPanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(ConfirmRidePopupPanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmRidePopupPanel])


  return (
    <div className='h-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://www.pngplay.com/wp-content/uploads/8/Uber-Transparent-Background.png" alt="Uber logo change"/>
         <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-2xl font-bold ri-logout-box-r-line"></i>
        </Link>
      </div>
       
        <div className='h-3/5'>
            <img className='h-full w-full object-cover'src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="Uber map"/>
        </div>
        <div className='h-2/5 p-6'>
         <CaptainDetails/>
        </div>
        <div ref={ridePopupPanelRef}  className='fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-14'>
              <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
        </div>
        <div ref={ConfirmRidePopupPanelRef}  className='fixed w-full h-screen z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-14'>
              <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}/>
        </div>


    </div>
  )
}

export default CaptainHome