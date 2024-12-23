import React, { useState } from 'react';
import { Send, CheckCircle, Mail, User, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ContactUsForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  // const handleChange = (e: { target: { name: any; value: any; }; }) => {
  //   setFormData(prev => ({
  //     ...prev,
  //     [e.target.name]: e.target.value
  //   }));
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff]">
            Let us Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your networking vision into reality. We are here to bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Contact Information */}
          <div className="space-y-8 p-6">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                Get in touch
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Have questions about our services? We would love to hear from you. Send us a message and we will respond as soon as possible.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-gray-600">
                <Mail className="h-5 w-5" />
                <span>contact@company.com</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-600">
                <MessageSquare className="h-5 w-5" />
                <span>Mon - Fri: 9:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <Card className="shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              {isSuccess ? (
                <Alert className="bg-green-50 text-green-800 border-green-200">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <AlertDescription>
                    Thank you for your message! We will get back to you soon.
                  </AlertDescription>
                </Alert>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50"
                        required
                      />
                    </div>
                    
                    <div className="relative">
                      <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50"
                        required
                      />
                    </div>
                    
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        placeholder="Your message"
                        rows={4}
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#2056aeff] to-[#50ade5ff] text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center space-x-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;