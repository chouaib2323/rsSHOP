import { useState, useEffect } from 'react';
import Footer from './Footer';
import computer from '../image/computer.png'
import laptop from '../image/leptop.jpg'
import computerback from '../image/computerback.png'
import { Link } from 'react-router-dom';
import Header from './Header';
import Addpro from './Addpro';
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import Procomp from './Procomp';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Map } from "react-algeria-map";

import '../index.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Home() {

  const data = {
    Adrar: 1,
    Chlef: 2,
    Laghouat: 3,
    "Oum El Bouaghi": 4,
    Batna: 5,
    Béjaïa: 6,
    Biskra: 7,
    Béchar: 8,
    Blida: 9,
    Bouira: 10,
    Tamanrasset: 11,
    Tébessa: 12,
    Tlemcen: 13,
    Tiaret: 14,
    "Tizi Ouzou": 15,
    Alger: 16,
    Djelfa: 17,
    Jijel: 18,
    Sétif: 19,
    Saïda: 20,
    Skikda: 21,
    "Sidi Bel Abbès": 22,
    Guelma: 23,
    Constantine: 24,
    Médéa: 25,
    Mostaganem: 26,
    "M'Sila": 27,
    Mascara: 28,
    Ouargla: 29,
    Oran: 30,
    "El Bayadh": 31,
    Illizi: 32,
    "Bordj Bou Arreridj": 34,
    Boumerdès: 35,
    "El Tarf": 36,
    Tindouf: 37,
    Tissemsilt: 38,
    Khenchela: 39,
    "Souk Ahras": 40,
    Tipaza: 41,
    Mila: 42,
    "Aïn Defla": 43,
    Naâma: 44,
    "Aïn Témouchent": 45,
    Ghardaïa: 46,
    Relizane: 47,
    Timimoun: 48,
    "Bordj Badji Mokhtar": 49,
    "Ouled Djellal": 50,
    "Béni Abbès": 51,
    "In Salah": 52,
    "In Guezzam": 53,
    Touggourt: 54,
    Djanet: 55,
    "El Meghaier": 56,
    "El Menia": 57
  };
  
  const [dataa, setDataa] = useState([]);

  useEffect(() => {
    fetch("https://localhost:443/pfe/dataret.php")
      .then(response => response.json())
      .then(result => setDataa(result.result))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
<Header/>
<section className="w-full md:h-screen h-auto py-15 md:py-0 flex justify-center firstpage bg-no-repeat bg-bottom bg-purple-200">
  <div className="w-full h-auto px-7 py-20 md:py-0 md:flex md:flex-row items-center justify-center">
    <div className="font-extrabold rounded-lg">
      <h1 className="text-2xl">
        <span className="text-purple-600">RS SHOP DZ</span> : Your Digital Playground
      </h1>
      <br />
      <p className="font-mono">
        Welcome to RS SHOP DZ,where innovation meets convenience.
        <br />
        Dive into a world of cutting-edge electronics
        <br />
        and smart solutions that elevate your digital lifestyle.
        <br />
        Join us on a journey through the latest gadgets
        <br />
        and tech wonders.
        <br />
        Welcome to RS SHOP DZ – your ultimate tech destination.
        <br />
        <br />
      </p>
      <div className="flex justify-center space-x-3">
        <Link to='/Products' className="p-5 border-black border-2 rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 font-bold">
          SHOP NOW
        </Link>
        <Link to='/Contact' className="p-5 border-black border-2 rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 font-bold">
          CONTACT
        </Link>
      </div>
    </div>
    <div>
      <img src={computerback} className="h-auto md:h-80 w-auto" />
    </div>
  </div>
</section>

<div className="grid place-items-center py-20 space-y-5">
  <p className="font-bold text-3xl underline decoration-sky-500">SOME OF OUR PRODUCTS</p>
  <p className=' font-bold decoration-sky-500 underline text-xl '> swipe to see ! </p>
</div>

<section >
<Swiper 
 slidesPerView={1}
 breakpoints={{
  640: {
    slidesPerView: 2,
    spaceBetween: 0,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
}}
         spaceBetween={0}
         centeredSlides={false}
         autoplay={{
           delay: 1700,
           disableOnInteraction: false,
         }}
         pagination={{
           clickable: true,
         }}
         navigation= {{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
         modules={[Autoplay, Pagination,Navigation]}
        className="mySwiper container mx-auto"
      >
        {dataa&&dataa.map((r, index) => (
          <SwiperSlide key={index}>
          <Addpro 
          image={r.image} 
          nomprd={r.nom}
          prix={r.prix} />
          </SwiperSlide>
        ))}
      </Swiper>
</section>

<section className=' h-auto w-full  flex md:flex-row flex-col py-10'>
 <div className=' flex md:w-1/2  md:h-full '>
  <img className=' ' src={laptop}/>
 </div>
  <div className='bg-purple-300 md:w-1/2  h-auto grid place-items-center p-4'>
    <p className=" font-extrabold text-3xl text-white">15% 0ffer everyday<br/>
   <i className=' text-xl font-semibold'> There are many variations of passages<br/>
     of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour<br/>
      or randomised words which don't look even slightly believable</i><br/>
</p>
</div>
</section>

<section className=' h-screen flex home bg-cover  	bg-no-repeat	'>

<div className=' flex flex-col justify-center w-1/2 space-y-5'><p className=' pl-10 text-3xl font-extrabold text-white'>Computer Gaming<br/> Store</p>
 <Link to='/About' className=' ml-10 border bg-black font-extrabold p-3 w-28 grid place-items-center  rounded-md text-white ' >About us</Link>
</div>
<div className=' w-1/2 hidden  md:grid place-items-center'><img src={computerback}/></div>
</section>

<section className=' grid place-items-center py-10'>
<h1 className=' font-bold text-3xl underline py-4'> Livration 58 wilaya</h1>
<div>
<Map
  color="#E69AF9"
  HoverColor="#4160FA"
  stroke="#fff"
  hoverStroke="#FA6464"
  height="400px"
  width="400px"
  data={data}
  onWilayaClick={(wilaya, data) => console.log(wilaya)}
/></div>

</section>

<Footer/>

    </>
    
  );
}

export default Home;
