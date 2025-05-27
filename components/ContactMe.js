import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Briefcase } from 'lucide-react';

const ContactSection = ({ theme = 'light' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleHireMe = () => {
    // You can customize this action - could open email, redirect to calendar, etc.
    window.open('mailto:your.email@example.com?subject=Hiring Inquiry&body=Hi, I\'m interested in hiring you for a project...', '_blank');
  };

  const isDark = theme === 'dark';

  return (
    <section className={`py-20 px-4 transition-all duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white' 
        : 'bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-bold mb-6 ${
            isDark 
              ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
          }`}>
            Let's Work Together
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can make it happen.
          </p>
          
          {/* Hire Me Button - Prominent placement */}
          <button
            onClick={handleHireMe}
            className={`mt-8 inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
              isDark
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
            }`}
          >
            <Briefcase className="mr-2 h-5 w-5" />
            Hire Me Now
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-semibold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                {/* Contact Items */}
                <div className={`flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-700/50' 
                    : 'bg-white/70 backdrop-blur-sm border border-gray-200/50 hover:bg-white shadow-sm hover:shadow-md'
                }`}>
                  <div className={`p-3 rounded-lg mr-4 ${
                    isDark 
                      ? 'bg-blue-500/20 text-blue-400' 
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                      Email
                    </p>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      your.email@example.com
                    </p>
                  </div>
                </div>

                <div className={`flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-700/50' 
                    : 'bg-white/70 backdrop-blur-sm border border-gray-200/50 hover:bg-white shadow-sm hover:shadow-md'
                }`}>
                  <div className={`p-3 rounded-lg mr-4 ${
                    isDark 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-green-100 text-green-600'
                  }`}>
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                      Phone
                    </p>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className={`flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-700/50' 
                    : 'bg-white/70 backdrop-blur-sm border border-gray-200/50 hover:bg-white shadow-sm hover:shadow-md'
                }`}>
                  <div className={`p-3 rounded-lg mr-4 ${
                    isDark 
                      ? 'bg-purple-500/20 text-purple-400' 
                      : 'bg-purple-100 text-purple-600'
                  }`}>
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                      Location
                    </p>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      New York, NY
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className={`text-xl font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: '#', color: 'hover:text-gray-400' },
                  { icon: Linkedin, href: '#', color: 'hover:text-blue-400' },
                  { icon: Twitter, href: '#', color: 'hover:text-blue-400' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                      isDark 
                        ? 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50' 
                        : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm hover:shadow-md'
                    } ${social.color}`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 ${
            isDark 
              ? 'bg-gray-800/30 border-gray-700/50' 
              : 'bg-white/80 border-gray-200/50 shadow-xl'
          }`}>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      isDark 
                        ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      isDark 
                        ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    isDark 
                      ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                    isDark 
                      ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                  isDark
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                }`}
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                ) : (
                  <Send className="mr-2 h-5 w-5" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export
// Demo component to show both themes
const ContactDemo = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  return (
    <div className="min-h-screen">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          Switch to {currentTheme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>

      <ContactSection theme={currentTheme} />
    </div>
  );
};

export default ContactDemo;