import React from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import FinishRide from '../components/FinishRide'

const CaptainRiding = () => {
    const[finishRidePanel, setFinishRidePanel] = React.useState(false)
    const finishRidePanelRef = React.useRef(null)

    useGSAP(function(){
    if(finishRidePanel){
      gsap.to(finishRidePanelRef.current,{
        transform:'translateY(0)'
      })
    }else{
      gsap.to(finishRidePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[finishRidePanel])
  return (
     <div className='h-screen relative'>
       
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://www.pngplay.com/wp-content/uploads/8/Uber-Transparent-Background.png" alt="Uber logo"/>
         <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <i className="text-2xl font-bold ri-logout-box-r-line"></i>
        </Link>
      </div>
       
        <div className='h-4/5'>
            <img className='h-full w-full object-cover'src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="Uber map"/>
        </div>
        <div className='h-1/5 p-6 flex items-center justify-between relative bg-yellow-400'
        onClick={()=>{
            setFinishRidePanel(true)
        }}>
         <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
        
        }}><i className=" text-3xl text-grey-200 ri-arrow-down-wide-line"></i></h5>
          <h4 className='text-xl font-semibold'>4 KM away</h4>
          <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>       
        </div>
        <div ref={finishRidePanelRef}  className='fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12'>
              <FinishRide setFinishRidePanel={setFinishRidePanel}/>
        </div>
       

    </div>
  )
}

export default CaptainRiding