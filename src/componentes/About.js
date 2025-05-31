import React from 'react';
import Footer from './Footer';
import Header from './Header';

function About() {
  return (
    <div>
      <Header />

      <section className="min-h-screen bg-purple-100 py-16 px-4">
        <div className="max-w-4xl mx-auto bg-purple-200 p-10 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold text-purple-800 mb-6 text-center">About Us</h1>
          <p className="text-lg text-purple-900 mb-4 leading-relaxed">
            Welcome to our e-commerce electronics site! We are dedicated to providing you with the best selection of electronic products, ranging from smartphones and laptops to home appliances and accessories.
          </p>
          <p className="text-lg text-purple-900 mb-4 leading-relaxed">
            Our mission is to offer high-quality products at competitive prices, ensuring that our customers have access to the latest technology and gadgets. With a focus on customer satisfaction, we strive to create a seamless shopping experience for all our users.
          </p>
          <p className="text-lg text-purple-900 leading-relaxed">
            At our store, you'll find a wide range of products from top brands, along with excellent customer service and fast shipping. Whether you're a tech enthusiast or simply looking for reliable electronics, we've got you covered. Thank you for choosing us for all your electronic needs!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
