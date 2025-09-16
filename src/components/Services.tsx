import React from 'react';
import { Scissors, Package, BusFront as Iron, Truck, Star, Clock, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Scissors className="h-8 w-8" />,
      title: 'Pre-Pleating',
      price: '₹299',
      description: 'Professional saree pre-pleating with perfect folds that last for months. Expert craftsmanship guaranteed.',
      features: ['Perfect pleats every time', 'Long-lasting finish', 'Expert technique', 'Quality assured'],
      gradient: 'from-pink-400 to-rose-400',
      bgGradient: 'from-pink-50 to-rose-50'
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: 'Box Folding',
      price: 'Charges Apply',
      description: 'Neat and compact box folding service to keep your sarees organized and wrinkle-free in storage.',
      features: ['Space-saving storage', 'Wrinkle prevention', 'Organized wardrobe', 'Professional folding'],
      gradient: 'from-purple-400 to-violet-400',
      bgGradient: 'from-purple-50 to-violet-50'
    },
    {
      icon: <Iron className="h-8 w-8" />,
      title: 'Saree Ironing',
      price: 'Charges Apply',
      description: 'Premium ironing service with special care for delicate fabrics, borders, and embellishments.',
      features: ['Fabric-specific care', 'Border expertise', 'Embellishment safe', 'Crisp finish'],
      gradient: 'from-blue-400 to-cyan-400',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: 'Doorstep Service',
      price: 'Charges Apply',
      description: 'Convenient pickup and delivery service right to your doorstep. No need to leave your home.',
      features: ['Free pickup & delivery', 'Scheduled timing', 'Safe handling', 'Contactless option'],
      gradient: 'from-green-400 to-emerald-400',
      bgGradient: 'from-green-50 to-emerald-50'
    }
  ];

  const features = [
    { icon: <Star className="h-6 w-6 text-yellow-500" />, text: '5+ Years Experience' },
    { icon: <Clock className="h-6 w-6 text-blue-500" />, text: 'Same Day Service' },
    { icon: <Shield className="h-6 w-6 text-green-500" />, text: '100% Safe Handling' }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Our Premium Services
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive saree care services designed to keep your precious garments looking their absolute best
          </p>
          
          {/* Features Row */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
                {feature.icon}
                <span className="font-medium text-gray-700">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${service.bgGradient} p-8 rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 group`}
            >
              <div className={`bg-gradient-to-r ${service.gradient} p-4 rounded-2xl inline-block mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                  <span className={`text-lg font-bold ${service.price === 'Charges Apply' ? 'text-gray-600' : `bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}`}>
                    {service.price}
                  </span>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 pt-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                      <span className="text-sm text-gray-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Combo Offer */}
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl p-8 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Complete Care Package</h3>
          <p className="text-xl mb-6 opacity-90">Pre-Pleating and Box Folding   Ironing </p>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="text-4xl font-bold">₹350</span>
            <span className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-sm font-bold">Best Value</span>
          </div>
          <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
            Choose Complete Package
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;