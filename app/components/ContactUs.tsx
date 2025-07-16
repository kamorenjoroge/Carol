"use client";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

interface FormData {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}

interface Errors {
    name?: string;
    email?: string;
    message?: string;
    [key: string]: string | undefined;
}

const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
        ...prev,
        [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
        setErrors((prev: Errors) => ({ ...prev, [name]: '' }));
    }
};

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
        // Replace with your actual form submission logic
        console.log('Form submitted:', formData);
        // Simulate API call
        await new Promise<void>(resolve => setTimeout(resolve, 1000));

        setSubmitSuccess(true);
        setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
        });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error: unknown) {
        console.error('Submission error:', error);
    } finally {
        setIsSubmitting(false);
    }
};

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Phone",
      details: ["+254 700 123 456", "+254 711 987 654"],
      color: "bg-blue-500"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      details: ["info@nacrecleaning.co.ke", "support@nacrecleaning.co.ke"],
      color: "bg-green-500"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Office Address",
      details: ["123 Clean Street", "Nairobi, Kenya"],
      color: "bg-red-500"
    },
    {
      icon: FaClock,
      title: "Working Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 3:00 PM"],
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="contactus" className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary font-semibold text-sm mb-4">
            Contact Us
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in <span className="text-transparent bg-clip-text bg-primary">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our services or ready to schedule a cleaning? 
            Contact us today and our team will respond promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-white/20">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
                Contact Information
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300">
                    <div className={`${item.color} p-3 rounded-full mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="text-white text-lg" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      {item.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 hover:text-secondary transition-colors duration-300">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href="https://wa.me/254700123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <FaWhatsapp className="mr-2 text-lg" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm border border-white/20">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
                Send Us a Message
              </h2>

              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl mb-6 flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500" />
                  Thank you for your message! We&lsquo;ll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 hover:border-gray-400`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <span className="mr-1">⚠️</span>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 hover:border-gray-400`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <span className="mr-1">⚠️</span>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 hover:border-gray-400"
                    placeholder="+254 700 123 456"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 hover:border-gray-400"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="waste">Waste Management</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="carpet">Carpet Cleaning</option>
                    <option value="window">Window Cleaning</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 hover:border-gray-400 resize-none`}
                    placeholder="Tell us about your cleaning needs..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <span className="mr-1">⚠️</span>
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:from-primary hover:to-secondary text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center disabled:opacity-70 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:hover:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Enhanced Map Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-white/20">
          <div className="p-6 bg-gradient-to-r from-secondary to-primary">
            <h3 className="text-xl font-bold text-white mb-2">Visit Our Office</h3>
            <p className="text-white/90">We&lsquo;re located in the heart of Nairobi for easy access</p>
          </div>
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808521926071!2d36.82115931575322!3d-1.2923852359768032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d664d95aab%3A0x7d5b0a5ab5e41c35!2sNairobi%20City%20Hall!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="hover:opacity-90 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;