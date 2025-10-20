import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronUp, Mail, MessageCircle, ArrowLeft, Clock, Check, Send, User, AtSign, MessageSquare } from 'lucide-react';
import Navbar from '../components/Navbar';
import { servicesData, Service, SubService } from '../data/servicesData';

interface SelectedService {
  service: Service;
  subService: SubService;
}

export default function ServicesDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const [expandedService, setExpandedService] = useState<string | null>(serviceId || null);
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (serviceId) {
      setExpandedService(serviceId);
      const element = document.getElementById(serviceId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [serviceId]);

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const isServiceSelected = (service: Service, subService: SubService) => {
    return selectedServices.some(
      (s) => s.service.id === service.id && s.subService.name === subService.name
    );
  };

  const toggleServiceSelection = (service: Service, subService: SubService) => {
    if (isServiceSelected(service, subService)) {
      setSelectedServices(
        selectedServices.filter(
          (s) => !(s.service.id === service.id && s.subService.name === subService.name)
        )
      );
    } else {
      setSelectedServices([...selectedServices, { service, subService }]);
    }
  };

  const handleRequestNow = () => {
    if (selectedServices.length === 0) {
      alert('Please select at least one service');
      return;
    }
    setShowRequestModal(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      handleEmailSubmit();
      setIsSubmitting(false);
    }, 500);
  };

  const handleEmailSubmit = () => {
    const serviceDetails = selectedServices
      .map((item, i) => `${i + 1}. ${item.service.name} - ${item.subService.name}%0D%0A   Price: ${item.subService.price}%0D%0A   Delivery: ${item.subService.deliveryTime}`)
      .join('%0D%0A%0D%0A');

    const subject = `Service Request from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}%0D%0A%0D%0ARequested Services:%0D%0A%0D%0A${serviceDetails}`;

    window.open(`mailto:muhammadzaryabrafique@gmail.com?subject=${subject}&body=${body}`, '_blank');
    resetForm();
  };

  const handleWhatsAppSubmit = () => {
    const serviceDetails = selectedServices
      .map((item, i) => `${i + 1}. ${item.service.name} - ${item.subService.name}%0A   Price: ${item.subService.price}%0A   Delivery: ${item.subService.deliveryTime}`)
      .join('%0A%0A');

    const message = `Hi! I'm ${formData.name}%0A%0A${formData.message}%0A%0ARequested Services:%0A%0A${serviceDetails}%0A%0AEmail: ${formData.email}`;

    window.open(`https://wa.me/+923347860477?text=${message}`, '_blank');
    resetForm();
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
    setSelectedServices([]);
    setShowRequestModal(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0F1C] relative overflow-hidden">
      <Navbar />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#00F6FF] rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-[#FFD700] rounded-full filter blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-12">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#00F6FF] hover:text-white transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={20} />
          <span className="font-semibold">Back to Home</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-[#00F6FF]">Services</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00F6FF] to-[#FFD700] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Select one or multiple services and submit your request instantly
          </p>
        </motion.div>

        {selectedServices.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <motion.button
              onClick={handleRequestNow}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 bg-gradient-to-r from-[#00F6FF] to-[#00C4CC] rounded-full shadow-[0_0_30px_rgba(0,246,255,0.5)] hover:shadow-[0_0_50px_rgba(0,246,255,0.7)] transition-all duration-300 flex items-center gap-3"
            >
              <span className="text-[#0A0F1C] font-bold text-lg">Request Now</span>
              <span className="w-8 h-8 bg-[#0A0F1C] rounded-full flex items-center justify-center text-[#00F6FF] font-bold">
                {selectedServices.length}
              </span>
            </motion.button>
          </motion.div>
        )}

        <div className="space-y-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="rounded-xl bg-gradient-to-br from-[#0F1829] to-[#0A0F1C] border border-[#00F6FF]/20 overflow-hidden transition-all duration-300 hover:border-[#00F6FF]"
            >
              <button
                onClick={() => toggleService(service.id)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-[#0F1829]/50 transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center text-3xl`}>
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">{service.name}</h2>
                    <p className="text-gray-400">{service.description}</p>
                  </div>
                </div>
                {expandedService === service.id ? (
                  <ChevronUp className="text-[#00F6FF]" size={24} />
                ) : (
                  <ChevronDown className="text-[#00F6FF]" size={24} />
                )}
              </button>

              <AnimatePresence>
                {expandedService === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 grid md:grid-cols-2 gap-6">
                      {service.subServices.map((subService, subIndex) => {
                        const isSelected = isServiceSelected(service, subService);
                        return (
                          <motion.div
                            key={subIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                            onClick={() => toggleServiceSelection(service, subService)}
                            className={`p-6 rounded-lg bg-[#0A0F1C] border-2 transition-all duration-300 cursor-pointer group relative ${
                              isSelected
                                ? 'border-[#00F6FF] shadow-[0_0_20px_rgba(0,246,255,0.3)]'
                                : 'border-[#00F6FF]/20 hover:border-[#00F6FF]/50'
                            }`}
                          >
                            <div className="absolute top-4 right-4">
                              <div
                                className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-300 ${
                                  isSelected
                                    ? 'bg-[#00F6FF] border-[#00F6FF]'
                                    : 'border-gray-600 group-hover:border-[#00F6FF]'
                                }`}
                              >
                                {isSelected && <Check size={16} className="text-[#0A0F1C]" />}
                              </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 pr-8 group-hover:text-[#00F6FF] transition-colors duration-300">
                              {subService.name}
                            </h3>

                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                              {subService.description}
                            </p>

                            <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                              <Clock size={16} className="text-[#FFD700]" />
                              <span>{subService.deliveryTime}</span>
                            </div>

                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                              <ul className="space-y-1">
                                {subService.features.slice(0, 3).map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-500">
                                    <span className="text-[#00F6FF] mt-1">•</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="pt-4 border-t border-gray-800">
                              <p className="text-2xl text-[#FFD700] font-bold">{subService.price}</p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showRequestModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowRequestModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-[#0F1829] to-[#0A0F1C] border-2 border-[#00F6FF] rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowRequestModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <X size={24} />
              </button>

              <h2 className="text-3xl font-bold text-white mb-6">Submit Your Request</h2>

              <div className="mb-6 p-4 rounded-lg bg-[#0A0F1C] border border-[#00F6FF]/20">
                <h3 className="text-lg font-semibold text-white mb-3">Selected Services:</h3>
                <div className="space-y-2">
                  {selectedServices.map((item, index) => (
                    <div key={index} className="flex justify-between items-start text-sm">
                      <div>
                        <p className="text-[#00F6FF] font-semibold">{item.subService.name}</p>
                        <p className="text-gray-400">{item.service.name}</p>
                      </div>
                      <p className="text-[#FFD700] font-bold">{item.subService.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Name *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-[#0A0F1C] border border-[#00F6FF]/20 rounded-lg text-white focus:border-[#00F6FF] focus:outline-none transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Email *</label>
                  <div className="relative">
                    <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-[#0A0F1C] border border-[#00F6FF]/20 rounded-lg text-white focus:border-[#00F6FF] focus:outline-none transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Message *</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-gray-500" size={20} />
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full pl-12 pr-4 py-3 bg-[#0A0F1C] border border-[#00F6FF]/20 rounded-lg text-white focus:border-[#00F6FF] focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    type="button"
                    onClick={handleEmailSubmit}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#00F6FF] to-[#00C4CC] text-[#0A0F1C] font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,246,255,0.5)] transition-all duration-300 disabled:opacity-50"
                  >
                    <Mail size={20} />
                    Send via Email
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] text-white font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all duration-300 disabled:opacity-50"
                  >
                    <MessageCircle size={20} />
                    Send via WhatsApp
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
