import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Procomp from './Procomp';
import { useDispatch } from 'react-redux';
import { addtocart } from '../redux/cartreducer';
import trash from '../image/trash.png'
import { removefromcart } from '../redux/cartreducer';
import { Link } from 'react-router-dom';
function Cart() {
const products = useSelector(state=>state.cart.products)
    const dispatch =useDispatch()

    return(
        <>
        <div>
                    <table className='cart border-b-4 pb-2'>
                        <thead>
                            <tr>
                                <th className='font-bold px-4'>Nom</th>
                                <th className='font-bold px-4'>Prix(DZ)</th>
                                <th className='font-bold px-4'>Quantité</th>
                            </tr>
                        </thead>
                        <tbody >
            {products.map((item,key) => (
                    <tr key={key} >
                     <td><input className=' w-auto border border-slate-300' value={item.nomprd} disabled name="nomprd" /></td>
                        <td><input className='w-28' value={item.prix} disabled name="prix" /></td>
                        <td><input type="number" className="qnt w-10"  disabled value={item.qnt} name="qnt"/></td>
                  <div className=' w-6 p-1' onClick={()=>{dispatch(removefromcart({id: item.id}))}}><img className=' w-4 h-auto' src={trash}/></div>
                  </tr>
            )
            )
        }
                        </tbody>
                    </table>
        </div>
        <div className=' h-auto w-full p-4 grid'> <Link to='/Checkout' className='border bg-black font-extrabold p-3  rounded-md text-white ' >check</Link></div>
       
        </>
    );
}

export default Cart;