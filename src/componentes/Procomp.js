import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtocart } from '../redux/cartreducer';
import Cart from './Cart';

function Procomp(props) {
 const dispatch =useDispatch()
 const [add,setadd]=useState(1)
    return (
        <>
            <div className='border-4 border-slate-300 w-72 lol  flex flex-col space-y-5 p-2'>
                <div className='grid place-items-center'>
                    <img className=' h-60 rounded-md' src={`https://localhost:443/pfe/img/${props.image}`} alt={props.nom} />
                </div>
                <div className='font-bold flex flex-col items-center'>
                    <p>{props.nomprd}</p>
                    <p>prix : <span className=' text-red-600'>{props.prix}</span>  dz</p>
                </div>
                <div className=' flex justify-center space-x-4 w-full '>  <button onClick={()=>{if(add==1||add<1){setadd(1)}else{setadd(add-1)} }} className=' font-bold text-2xl text-red-500'>-</button><input value={add} disabled className=' w-10 border' type='number'/>
                <button onClick={()=>{setadd(add+1)}} className=' font-bold text-xl text-green-500' >+</button >
              </div>
                <div className='flex justify-center'>
                    <button onClick={()=>{dispatch(addtocart({
                        id:props.id,
                        nomprd:props.nomprd,
                        prix:props.prix,
                        qnt:add,
                    }));setadd(1)}} className='border bg-green-400 font-extrabold p-3 rounded-md'>Add to Cart</button>
                </div>
            </div>
        </>
    );
}

export default Procomp;
