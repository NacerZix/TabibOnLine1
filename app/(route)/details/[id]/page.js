"use client"
import React, { useEffect, useState } from 'react'
import Api from '@/app/_utils/Api'
import DoctorDetails from '../_components/DoctorDetails'
import Doctoruggestions from '../_components/Doctoruggestions'
function Details({params}) {

    const [doctor,setDoctor] = useState()

    useEffect(()=>{
        getDoctorById()
    },[])

    const getDoctorById=()=>{
        Api.getDoctorById(params.id).then(resp=>{
           console.log(resp.data.data)
          setDoctor(resp.data.data)
        })
    }
  return (
    <div className='p-5 md:px-20'>
      <h2 className='font-bold text-[22px]'>Details</h2>
   
    <div className='grid md:grid-cols-4 grid-cols-1'>

      {/* doctor details*/}
      <div className=' col-span-3 '>
     <DoctorDetails doctor={doctor}/>
  
      </div>
       
         {/* doctor suggestions*/}
        <div>

          <Doctoruggestions/>
        </div>
    
    
    
    </div>
    </div>
  )
}

export default Details