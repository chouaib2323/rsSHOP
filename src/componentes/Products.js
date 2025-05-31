import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Procomp from './Procomp';
import { Fade } from 'react-awesome-reveal';

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');
  const [showPcparts, setShowPcparts] = useState(false);
  const [showAcss, setShowAcss] = useState(false);

  useEffect(() => {
    fetch('https://localhost:443/pfe/dataret.php')
      .then(res => res.json())
      .then(result => {
        setData(result.result);
        setFilter(result.result);
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredData = data.filter(item =>
      item.nom.toLowerCase().includes(searchValue)
    );
    setFilter(filteredData);
  };

  const filterByCategory = (category) => {
    if (category === '') {
      setFilter(data);
    } else {
      const filtered = data.filter(item =>
        item.category.toLowerCase().includes(category)
      );
      setFilter(filtered);
    }
    setActiveCategory(category);
    setShowPcparts(false);
    setShowAcss(false);
  };

  const menuItemClass = (cat) =>
    `cursor-pointer text-center border-b-2 border-black p-2 md:w-36 ${
      activeCategory === cat ? 'bg-purple-200 font-semibold' : ''
    }`;

  const dropdownItemClass = (cat) =>
    `cursor-pointer ${
      activeCategory === cat ? 'text-blue-500 font-bold' : ''
    }`;

  return (
    <div className="space-y-4">
      <Header />

      {/* Category Filter Bar */}
      <div className="flex flex-wrap justify-center md:justify-between px-4 font-bold relative space-y-2 md:space-y-0">
        <div onClick={() => filterByCategory('')} className={menuItemClass('')}>
          All
        </div>

        {/* PC Parts Dropdown */}
        <div className="relative">
          <p onClick={() => setShowPcparts(!showPcparts)} className={menuItemClass('pc')}>
            PC Parts
          </p>
          <div
            onMouseLeave={() => setShowPcparts(false)}
            className={`absolute bg-white rounded shadow-md w-40 z-10 py-3 space-y-2 ${
              showPcparts ? 'block' : 'hidden'
            }`}
          >
            {['hdd', 'gpu', 'cpu', 'motherboard', 'case', 'ram', 'cooling', 'powersupply'].map((cat) => (
              <div key={cat} onClick={() => filterByCategory(cat)} className={dropdownItemClass(cat)}>
                {cat.toUpperCase()}
              </div>
            ))}
          </div>
        </div>

        {/* Monitors & Laptops */}
        <div onClick={() => filterByCategory('monitor')} className={menuItemClass('monitor')}>
          Monitors
        </div>
        <div onClick={() => filterByCategory('laptop')} className={menuItemClass('laptop')}>
          Laptops
        </div>

        {/* Accessories Dropdown */}
        <div className="relative">
          <p onClick={() => setShowAcss(!showAcss)} className={menuItemClass('accessories')}>
            Accessories
          </p>
          <div
            onMouseLeave={() => setShowAcss(false)}
            className={`absolute bg-white rounded shadow-md w-40 z-10 py-3 space-y-2 ${
              showAcss ? 'block' : 'hidden'
            }`}
          >
            {['keyboard', 'mouse', 'controller', 'pad', 'headset', 'speaker'].map((cat) => (
              <div key={cat} onClick={() => filterByCategory(cat)} className={dropdownItemClass(cat)}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search Input */}
      <div className="flex justify-center mt-4">
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
          className="w-full max-w-md p-3 rounded-lg border-2 border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Products List */}
      <section className="container mx-auto p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-h-screen">
        {filter.map((item, index) => (
          <Fade key={item.id || index}>
            <Procomp id={item.id} image={item.image} nomprd={item.nom} prix={item.prix} />
          </Fade>
        ))}
      </section>

      <Footer />
    </div>
  );
}

export default Products;
