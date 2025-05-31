import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { removefromcart } from '../redux/cartreducer';
import Footer from './Footer';

function Checkout() {

    const wilaya = [
        "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar", "Blida", "Bouira",
        "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Sétif", "Saïda",
        "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara",
        "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arreridj", "Boumerdès", "El Tarf", "Tindouf",
        "Tissemsilt", "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent",
        "Ghardaïa", "Relizane", "Timimoun", "Bordj Badji Mokhtar", "Ouled Djellal", "Béni Abbès", "In Salah",
        "In Guezzam", "Touggourt", "Djanet", "El M'Ghair", "El Menia"
    ];

    const [formData, setFormData] = useState({
        nomcl: '',
        state: '',
        address: '',
        phone: '',
        paiment: '',
        products: [],
    });

    const products = useSelector(state => state.cart.products);
   

    useEffect(() => {
        setFormData(prevState => ({
            ...prevState,
            products: products
        }));
    }, [products]);

    useEffect(() => {
        if (userlog.loggedIn === true) {
            setFormData(prevData => ({ ...prevData, nomcl: userlog.name }))
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://localhost/pfe/dataret.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log("data sent");
                alert("your order is sent")
            } else {
                console.log("data not sent");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const [total, setTotal] = useState(0);

    useEffect(() => {
        let totalPrice = 0;
        products.forEach(item => {
            totalPrice += parseInt(item.prix) * parseInt(item.qnt);
        });
        setTotal(totalPrice);
    }, [products]);

    const userlog = useSelector(state => state.user);
console.log(formData)

const isFormValid = () => {
    return formData.nomcl && formData.state && formData.address && formData.phone && formData.paiment;
}

    return (
        <div>
            <Header />
            <section className='container mx-auto md:flex md:justify-between min-h-screen'>
                <div className='border p-10 md:w-1/2'>
                    <p className="font-extrabold text-2xl pb-5">YOUR INFO</p>
                    <form className='space-y-10' onSubmit={handleSubmit} >
                        {userlog.loggedIn ? "" : <div><label className='font-bold' htmlFor='name'>your full name: <span className='text-red-500'>*</span> </label>
                            <input name='nomcl' id='name' className='border-2 border-black rounded-sm' onChange={(e) => { setFormData(prevData => ({ ...prevData, nomcl: e.target.value })) }} required /><br /></div>}
                        <label htmlFor='stateSelect' className='font-bold'> choose your state (wilaya) : <span className='text-red-500'>*</span> </label>
                        <select className='border-2 border-purple-400 rounded-md' required id="stateSelect" onChange={(e) => { setFormData(prevData => ({ ...prevData, state: e.target.value })) }}>
                            <option value="" disabled selected>Select a state</option>
                            {wilaya.map((e) => (
                                <option key={e} value={e} className='font-bold'>{e}</option>
                            ))}
                        </select><br />
                        <label className='font-bold' htmlFor='email'>your adress: <span className='text-red-500'>*</span>
                        </label>
                        <input name='email' id='email' type="text" className='border-2 border-black rounded-sm' onChange={(e) => { setFormData(prevData => ({ ...prevData, address: e.target.value })) }} required /><br />
                        <label className='font-bold' htmlFor='phone'>your phone number: <span className='text-red-500'>*</span> </label>
                        <input name='phone' type="number" id='phone' className='border-2 border-black rounded-sm' onChange={(e) => { setFormData(prevData => ({ ...prevData, phone: e.target.value })) }} required /><br />
                        <input onClick={(e) => { setFormData(prevData => ({ ...prevData, paiment: e.target.value })) }} type="radio" id="liv" name="paiment" value="paiment a la livraison" />
                        <label className='font-bold p-2' htmlFor="liv">paiement a la livraison</label>
                        <input onClick={(e) => { setFormData(prevData => ({ ...prevData, paiment: e.target.value })) }} type="radio" id="dahabya" name="paiment" value="paiment eldahabya" />
                        <label className='font-bold p-2' htmlFor="dahabya">paiment eldahabya</label><br/>
                        <label className='font-bold' htmlFor='sure'>are you sure you want to check: </label>
                        <input className='border-2 border-black' type="checkbox" name='sure' id='sure' required /><br />
                    </form>
                </div>
                <div className='border md:w-1/2 min-h-96 p-10 space-y-5'>
                    <p className="font-extrabold text-2xl">commande</p>
                    <p className='font-semibold underline'>Your order:</p>
                    <div className="font-bold flex space-x-20 text-red-500 justify-between">
                        <p>product × Quantity : </p> 
                        <p>product price: </p>
                    </div>
                    {products.map((item) => (
                        <div className='flex space-x-14 font-bold '>
                            <div className='border-b-2 border-black flex'>{item.nomprd} × {item.qnt}</div>
                            <div className='flex space-x-1'>
                                <div>{item.prix}</div> 
                                <p>DZ</p>
                            </div>
                        </div>
                    ))}
                    <p className='font-bold'>Total price is : <span className='text-xl font-bold text-green-600'> {total} DZ</span> </p>
                    <div><button onClick={handleSubmit} className={`border bg-black font-extrabold p-3 rounded-md text-white ${isFormValid() ? '' : 'opacity-50 cursor-not-allowed'}`} type='submit' disabled={!isFormValid()}>Check out</button></div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
export default Checkout;