import React from 'react'
import { Link } from 'react-router-dom';
function Addpro(props) {

  return (
    <div>
        <div className='border-4 border-slate-300 md:w-60 h-96  flex flex-col  p-2 shadow-md shadow-gray-600 rounded-lg'>
                <div className='grid place-items-center h-2/3'>
                    <img className='w-auto rounded-md' src={`https://localhost:443/pfe/img/${props.image}`} alt={props.nom} />
                </div>
                <div className='font-bold flex flex-col items-center justify-end h-1/3 backdrop-blur-sm'>
                    <p className=' text-xl'>{props.nomprd}</p>
                    <p>price : <span className=' text-red-600'>{props.prix}</span>  dz</p>
                </div>
                <div className='flex justify-center'>
                 
                </div>
                </div>
    </div>
  )
}

export default Addpro