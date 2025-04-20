import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function DoctorList({doctorList, heading="Popular Doctors"}) {
  return (
    <div>

        <h2 className='font-bold text-xl text-lime-600'>{heading}</h2>

        <div className='grid grid-cols-1 md:grid-cols-3 p-3'>
                {doctorList?.length>0?doctorList?.map((doctor,index)=>(
                  <Link href={`/details/${doctor?.documentId}`}>
                    <div key={index} className='border-[1px] rounded-lg p-3 m-3 '>
                        <Image src={`http://localhost:1337/${doctor?.image?.url}`}
                        
                        width={500}
                        height={200}
                        className='h-[300px] w-full object-cover '
                        
                        />
                       <div className='items-baseline flex flex-col'>
                        <h2 className='text-lime-600 mt-3 bg-lime-200 rounded-full p-2 text-bold'>{doctor?.category?.name}</h2>

                        <h2 className='mt-2'> <span className='text-lime-600 text-bold'>Name: </span> {doctor?.name}</h2>
                        <h2 className='mt-2'><span className='text-lime-600 text-bold'>Year Of Experience: </span>    {doctor?.year_of_experience} years</h2>


                        <h2 className='mt-2'> <span className='text-lime-600 text-bold'>Adress: </span> {doctor?.address}</h2>
                        <h2 className='mt-2'><span className='text-lime-600 text-bold'>Phone: </span>    {doctor?.phone} </h2>

                        <h2 className='border-[1px] p-3 border-lime-600 mt-5  hover:bg-lime-300 cursor-pointer hover:scale-110 transition-all ease-in-out'>Book Now</h2>
                        </div> 
                    </div>
                    </Link>

                ))
                :
                [1,2,3,4,5,6,7,8].map((item,index)=>(
        <div  key={index} className='h-[220px]    bg-lime-100 m-15 animate-pulse'></div>
                ))
              }
        </div>
    </div>
  )
}

export default DoctorList