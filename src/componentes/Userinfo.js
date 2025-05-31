import React from 'react'
import Header from './Header'
import { useSelector, useDispatch } from 'react-redux';
import Footer from './Footer';
function Userinfo() {
    const userlog = useSelector(state => state.user);
  return (
    <>
    <Header/>
        <div className=' p-24 '>
        
        <div class="max-w-md mx-auto">
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
      Email
    </label>
    <input value={userlog.email} disabled class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="example@example.com"/>
  </div>
  <div class="mb-6">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Username
    </label>
    <input value={userlog.name} disabled class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your username"/>
  </div>
</div>

    </div>
    <Footer/>
    </>
  )
}

export default Userinfo