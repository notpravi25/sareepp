import React from 'react';
import { Star, Sparkles, Clock, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-6 w-6 text-pink-500" />
                <span className="text-pink-600 font-semibold text-lg">Premium Saree Services</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Perfect Pleats
                </span>
                <br />
                <span className="text-gray-800">Every Time</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Transform your sarees with our professional pre-pleating services. 
                Expert craftsmanship, doorstep delivery, and perfectly pressed pleats that last.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-pink-100 p-2 rounded-full">
                  <Star className="h-5 w-5 text-pink-600" />
                </div>
                <span className="text-gray-700 font-medium">Professional Pre-Pleating at ₹299 per saree</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-purple-600" />
                </div>
                <span className="text-gray-700 font-medium">Same-day service available</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">Doorstep pickup & delivery available</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToBooking}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Now - ₹299/Saree
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-pink-500 text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-all duration-300"
              >
                View Services
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://i.pinimg.com/736x/a0/ca/85/a0ca85654529be8a68b9a6acad0a8e80.jpg"
                alt="Beautiful saree with perfect pleats"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-pink-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">₹299</div>
                <div className="text-gray-600 font-medium">Per Saree</div>
                <div className="text-sm text-gray-500">Pre-Pleating</div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-purple-100">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="font-semibold text-gray-800">5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;