import React from 'react';
import { Scissors, Phone, Mail, MapPin, Clock, Star, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-pink-400 to-purple-400 p-3 rounded-full">
                <Scissors className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Durgs's Saree</h3>
                <p className="text-pink-300">Pre Pleating Services</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Professional saree pre-pleating services with doorstep pickup and delivery. 
              Making your sarees ready-to-wear with perfect pleats every time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-purple-600 hover:bg-purple-700 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-pink-300">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-pink-300 transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-pink-300 transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-pink-300 transition-colors">Gallery</a></li>
              <li><a href="#booking" className="text-gray-300 hover:text-pink-300 transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-purple-300">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Pre-Pleating - ₹299</li>
              <li className="text-gray-300">Box Folding - Charges Apply</li>
              <li className="text-gray-300">Saree Ironing - Charges Apply</li>
              <li className="text-gray-300">Doorstep Service - Charges Apply</li>
            </ul>
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-4 rounded-xl">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="h-5 w-5 text-yellow-300" />
                <span className="font-bold">Complete Package</span>
              </div>
              <p className="text-sm">All services included - ₹299</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-blue-300">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-pink-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Rajeevnagar, Kurmanapalem,<br />
                    Visakhapatnam
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400" />
                <p className="text-gray-300">+91 9876543210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <p className="text-gray-300">info@durgsprepleating.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-green-400 mt-1" />
                <div>
                  <p className="text-gray-300">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-300">Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 Durgs's Saree Pre Pleating Services. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-pink-300 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-pink-300 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-pink-300 transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;