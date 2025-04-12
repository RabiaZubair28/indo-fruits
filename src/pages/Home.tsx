import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Fresh Fruits,<br />Delivered to You</h1>
            <p className="text-xl mb-8">Experience the finest selection of premium fruits</p>
            <Link to="/shop" className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors">
              Shop Now <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Premium Fruits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Mangoes',
                image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80',
                description: 'Sweet and juicy mangoes from the finest orchards'
              },
              {
                name: 'Avocado',
                image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80',
                description: 'Creamy and nutritious avocados'
              },
              {
                name: 'Berries',
                image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80',
                description: 'Fresh and delicious assorted berries'
              }
            ].map((fruit, index) => (
              <motion.div
                key={fruit.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img src={fruit.image} alt={fruit.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{fruit.name}</h3>
                  <p className="text-gray-600">{fruit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Indo Fruits?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Premium Quality', description: 'Hand-picked fresh fruits of the highest quality' },
              { title: 'Fast Delivery', description: 'Quick and reliable delivery to your doorstep' },
              { title: 'Best Prices', description: 'Competitive prices for premium fruits' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;