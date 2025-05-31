import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="grid place-items-center h-44 bg-slate-100 mt-10">
  <div className="space-y-5 space-x-0 md:space-x-14 border-2 md:flex grid place-items-center justify-between p-4 border-purple-400 rounded-md bg-purple-200">
    <div className="md:flex flex-col justify-center hidden">
      <p className="text-2xl font-bold">OUR CONTACTS</p>
      <p className="font-bold">here : </p>
      <p className="font-bold underline">chouaibe2019@gmail.com</p>
      <p className="font-bold"><i className="text-xl">number</i> : +213657763921</p>
    </div>
    <div className="md:grid md:place-items-center flex space-x-4 md:space-x-0">
      <a href="/" className="font-bold">facebook</a>
      <a href="/" className="font-bold">instagram</a>
      <a href="/" className="font-bold">twiter</a>
    </div>
    <div className="grid place-items-center font-bold">
      <p>2023 <i className="text-purple-500">©</i> CHOUAIB | ALL RIGHTS RESERVED.</p>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer