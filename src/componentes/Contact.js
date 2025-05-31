import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';

function Contact() {
  const [data, setData] = useState({
    nom: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://localhost:443/api_fin/mess.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Your message has been sent!');
        console.log('Data sent');
      } else {
        console.log('Data not sent');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <Header />

      <section className="flex items-center justify-center min-h-screen bg-purple-100">
        <div className="w-full max-w-2xl p-8 bg-purple-200 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold text-center mb-8 text-purple-800">Contact Us</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-semibold text-purple-900 mb-1">Your Name:</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border-2 border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                onChange={(e) => setData((prev) => ({ ...prev, nom: e.target.value }))}
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-semibold text-purple-900 mb-1">Your Email:</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border-2 border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))}
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-semibold text-purple-900 mb-1">Your Message:</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border-2 border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                onChange={(e) => setData((prev) => ({ ...prev, message: e.target.value }))}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-md transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
