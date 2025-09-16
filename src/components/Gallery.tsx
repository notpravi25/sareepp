import React from 'react';
import { ExternalLink, Star } from 'lucide-react';

const Gallery: React.FC = () => {
  const sarees = [
    {
      id: 1,
      image: 'https://i.pinimg.com/736x/c5/9c/a0/c59ca0f02686e002ca60b289ffb350dd.jpg',
      title: 'Traditional Silk Saree',
      description: 'Perfectly pleated with intricate border work'
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/736x/1d/69/bb/1d69bb8585a5e3294cae69bfdb03fdbe.jpg',
      title: 'Designer Georgette Saree',
      description: 'Elegant pleating with contemporary style'
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/1200x/4d/51/fc/4d51fca638afb9f066a8ebcdc08171b3.jpg',
      title: 'Cotton Handloom Saree',
      description: 'Crisp pleats for everyday elegance'
    },
    {
      id: 4,
      image: 'https://i.pinimg.com/736x/3b/c9/d3/3bc9d366da52cec1a5427d9ac69ac92a.jpg',
      title: 'Banarasi Silk Saree',
      description: 'Royal pleating for special occasions'
    },
    {
      id: 5,
      image: 'https://i.pinimg.com/736x/f0/a3/06/f0a3064cdfc430c52861290bcd8841a1.jpg',
      title: 'Chiffon Party Saree',
      description: 'Delicate pleating with perfect drape'
    },
    {
      id: 6,
      image: 'https://i.pinimg.com/736x/ee/ba/ad/eebaad052031617c0184c1606e4bf7cb.jpg',
      title: 'Embroidered Net Saree',
      description: 'Intricate pleating preserving embellishments'
    }
  ];

  const testimonials = [
    {
      name: 'Bhavani',
      text: 'Excellent service! My sarees look perfect every time.',
      rating: 5
    },
    {
      name: 'Lakshmi Devi',
      text: 'Professional pleating and doorstep service is amazing.',
      rating: 5
    },
    {
      name: 'Anjali Reddy',
      text: 'Best pre-pleating service in Visakhapatnam!',
      rating: 5
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Our Work Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            See the perfect pleating results that make every saree look stunning and ready to wear
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sarees.map((saree) => (
            <div
              key={saree.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={saree.image}
                  alt={saree.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="h-5 w-5 text-gray-700" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{saree.title}</h3>
                <p className="text-gray-600 leading-relaxed">{saree.description}</p>
                <div className="flex items-center mt-4 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2">Perfect Result</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            What Our Customers Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;