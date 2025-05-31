import React from 'react'
import shop from '../image/shop.png'
import logo from '../image/logo.png'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cart from './Cart';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/userReducer';
export default function Header(props) {

    const[showw,setShoww]= useState(false)
    function bod(){
    document.querySelector('body').classList.add("over")
   }
   function bodrem(){
     document.querySelector('body').classList.remove("over")
    }

    const [show, setShow] = useState(true);
    const products = useSelector(state=>state.cart.products)
    
    const handleClick = () => {
        products.length==0&&show==true?alert("add a product to open cart"): setShow(!show);
    };
    const userlog = useSelector(state => state.user);
    const dispatch =useDispatch()





  const [userdrop,setdrop]=useState(true)
  return (
    <div>
        
        <header className="w-full h-20 flex justify-between backdrop-blur-md bg-purple-200">
            <div className="flex items-center">
                <img src={logo} className="w-10 h-auto" />
                <p className="font-bold">RS SHOP DZ</p>
            </div>
            <div className="space-x-10 md:flex items-center font-extrabold underline hidden ">
            
                <Link to="/" className="text-purple-600 text-xl aa">Home</Link>
                <Link to="/Products" className="text-xl aa">Products</Link>
                <Link to="/About" className="text-xl aa"> About Us</Link>
                <Link to="/Contact" className="text-purple-600 text-xl aa">Contact Us</Link>
            </div>

            <div className="flex items-center pr-1 relative space-x-5"  >
            <div className=' font-bold  p-2 '>{userlog.loggedIn?<div><p className=' cursor-pointer' onClick={()=>{setdrop(!userdrop)}}>{userlog.name}</p><div className={`absolute ${userdrop?"hidden":"block"} `}>
            <div className=' p-2'><Link to="/Userinfo">Userinfo</Link></div>
                <div className=' cursor-pointer  p-2 w-20' onClick={()=>{dispatch(logout())}} >logout</div>
                </div></div>:<Link to="/login">login</Link>} </div>
                <img src={shop} className="w-auto h-10 " onClick={handleClick} />
                <div className={`overscroll-auto overflow-auto w-80 md:w-auto border-4 border-slate-300  h-72 rounded-lg bg-purple-200 absolute top-14   md:top-5 p-4 right-11 ${show ? 'hidden' : 'block'}`}>
               <Cart/>
                </div>
                <div className=' space-y-1 md:hidden' onClick={()=>{setShoww(!showw);bod()}}>
<div className=" w-7 h-1 bg-black rounded-md "></div>
<div className=" w-7 h-1 bg-black rounded-md"></div>
<div className=" w-7 h-1 bg-black rounded-md"></div>
      </div>
            </div>
            <div className = {`   w-screen h-screen fixed  z-20 border-blue-400 bg-purple-400 ${showw?'activate ff':'nonactive'}` }>
               <div className='flex justify-end pt-4 pr-4' onClick={()=>{ setShoww(!showw);bodrem() }}>
                  <p className='text-black underline text-3xl'>close</p>
               </div>
          <ul className='flex items-center flex-col  justify-center pt-20 space-y-28 '>
           <li onClick={()=>{bodrem()}}> <Link to="/" className='text-slate-100 text-3xl  hover:duration-300 hover:underline hover:underline-offset-2 '>Home</Link></li>
           <li onClick={()=>{bodrem()}}> <Link to="/Products" className='text-slate-100  text-3xl  hover:duration-300 hover:underline hover:underline-offset-2'>products</Link></li>
           <li onClick={()=>{bodrem()}}> <Link to="/About" className='text-slate-100 text-3xl   hover:duration-300 hover:underline hover:underline-offset-2'>about us</Link></li>
           <li onClick={()=>{bodrem()}}> <Link to="/Contact" className='text-slate-100 text-3xl  hover:duration-300 hover:underline hover:underline-offset-2'>Contuct us</Link></li>
            </ul>
        </div>
        </header>
    </div>
  )
}