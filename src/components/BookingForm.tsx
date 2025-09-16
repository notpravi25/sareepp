import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MapPin, Package, IndianRupee, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BookingData {
  customer_name: string;
  phone: string;
  email: string;
  address: string;
  number_of_sarees: number;
  services: string[];
  preferred_date: string;
  preferred_time: string;
  special_instructions: string;
}

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingData>({
    customer_name: '',
    phone: '',
    email: '',
    address: '',
    number_of_sarees: 1,
    services: [],
    preferred_date: '',
    preferred_time: '',
    special_instructions: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const serviceOptions = [
    { id: 'pre-pleating-designer', label: 'Pre-Pleating and box folding DESIGNER SAREE', price: 499 },
    { id: 'pre-pleating-normal', label: 'Pre-Pleating and box folding NORMAL SAREE', price: 299 },
    { id: 'ironing', label: 'Saree Ironing', price: 50 },
    { id: 'doorstep-service', label: 'Doorstep Service (Contact for pricing)', price: 0 }
  ];

  const timeSlots = [
    '9:00 AM - 11:00 AM',
    '11:00 AM - 1:00 PM',
    '1:00 PM - 3:00 PM',
    '3:00 PM - 5:00 PM',
    '5:00 PM - 7:00 PM'
  ];

  const calculateTotal = () => {
    const baseTotal = formData.services.reduce((total, serviceId) => {
      const service = serviceOptions.find(s => s.id === serviceId);
      return total + (service ? service.price : 0);
    }, 0);
    
    return baseTotal * formData.number_of_sarees;
  };

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        services: [...prev.services, serviceId]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        services: prev.services.filter(id => id !== serviceId)
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const totalAmount = calculateTotal();
      
      const { error } = await supabase
        .from('bookings')
        .insert([{
          ...formData,
          total_amount: totalAmount
        }]);

      if (error) throw error;

      // Send email notification to admin
      try {
        const emailResponse = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-booking-email`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            total_amount: totalAmount
          }),
        });
        
        if (!emailResponse.ok) {
          console.warn('Failed to send email notification');
        }
      } catch (emailError) {
        console.warn('Email notification error:', emailError);
        // Don't fail the booking if email fails
      }

      setSubmitStatus('success');
      // Reset form
      setFormData({
        customer_name: '',
        phone: '',
        email: '',
        address: '',
        number_of_sarees: 1,
        services: [],
        preferred_date: '',
        preferred_time: '',
        special_instructions: ''
      });
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const minDate = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Book Your Appointment
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Schedule your saree pre-pleating service with our experts. Fill out the form below and we'll contact you to confirm your appointment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-800">Booking Submitted Successfully!</h3>
                    <p className="text-green-700">We'll contact you shortly to confirm your appointment.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="bg-red-50 border-l-4 border-red-400 p-6">
                <div className="flex items-center">
                  <AlertCircle className="h-6 w-6 text-red-600 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-800">Booking Failed</h3>
                    <p className="text-red-700">{errorMessage}</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Personal Details */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Personal Details</h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <User className="inline h-4 w-4 mr-1" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.customer_name}
                      onChange={(e) => setFormData(prev => ({ ...prev, customer_name: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="inline h-4 w-4 mr-1" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="inline h-4 w-4 mr-1" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <MapPin className="inline h-4 w-4 mr-1" />
                      Pickup Address
                    </label>
                    <textarea
                      rows={3}
                      value={formData.address}
                      onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your complete address for pickup (optional)"
                    ></textarea>
                  </div>
                </div>

                {/* Right Column - Service Details */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Service Details</h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Package className="inline h-4 w-4 mr-1" />
                      Number of Sarees *
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="50"
                      required
                      value={formData.number_of_sarees}
                      onChange={(e) => setFormData(prev => ({ ...prev, number_of_sarees: parseInt(e.target.value) }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Services Required *</label>
                    <div className="space-y-3">
                      {serviceOptions.map((service) => (
                        <label key={service.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              checked={formData.services.includes(service.id)}
                              onChange={(e) => handleServiceChange(service.id, e.target.checked)}
                              className="mr-3 h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                            />
                            <span className="font-medium text-gray-700">{service.label}</span>
                          </div>
                          <span className="text-pink-600 font-bold">
                            {service.price === 0 ? 'Free' : `₹${service.price}`}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Calendar className="inline h-4 w-4 mr-1" />
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        min={minDate}
                        value={formData.preferred_date}
                        onChange={(e) => setFormData(prev => ({ ...prev, preferred_date: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Clock className="inline h-4 w-4 mr-1" />
                        Preferred Time *
                      </label>
                      <select
                        required
                        value={formData.preferred_time}
                        onChange={(e) => setFormData(prev => ({ ...prev, preferred_time: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Special Instructions</label>
                    <textarea
                      rows={3}
                      value={formData.special_instructions}
                      onChange={(e) => setFormData(prev => ({ ...prev, special_instructions: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                      placeholder="Any special care instructions or requirements..."
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Total and Submit */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl">
                    <div className="flex items-center space-x-2 text-2xl font-bold">
                      <IndianRupee className="h-6 w-6 text-pink-600" />
                      <span className="text-gray-800">Total: </span>
                      <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                        ₹{calculateTotal()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      For {formData.number_of_sarees} saree{formData.number_of_sarees > 1 ? 's' : ''}
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || formData.services.length === 0}
                    className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Submitting...' : 'Book Appointment'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;