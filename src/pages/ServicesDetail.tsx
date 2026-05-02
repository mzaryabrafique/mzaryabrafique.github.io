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
    <div className="min-h-screen bg-brand-bg relative overflow-hidden">
      <Navbar />

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 pt-32 pb-12">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-brand-secondary hover:text-brand-primary transition-colors duration-300 mb-8 mt-12 font-medium"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </button>

        <div className="text-center mb-16">
          <h1 className="text-[48px] font-normal text-brand-primary tracking-tight mb-4">
            Our Services
          </h1>
          <p className="text-brand-secondary text-[20px] max-w-2xl mx-auto font-normal">
            Select one or multiple services and submit your request instantly
          </p>
        </div>

        <AnimatePresence>
          {selectedServices.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-8 right-8 z-50"
            >
              <button
                onClick={handleRequestNow}
                className="px-8 py-4 bg-brand-button text-brand-secondary font-medium rounded-button hover:bg-brand-button/80 transition-all duration-300 flex items-center gap-3 shadow-2xl border border-brand-border"
              >
                <span className="text-[16px]">Request Now</span>
                <span className="w-6 h-6 bg-brand-surface border border-brand-border rounded-full flex items-center justify-center text-brand-primary font-medium text-[12px]">
                  {selectedServices.length}
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-y-6 max-w-5xl mx-auto">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="rounded-card bg-brand-surface border border-brand-border overflow-hidden transition-all duration-300 hover:border-brand-tertiary"
            >
              <button
                onClick={() => toggleService(service.id)}
                className="w-full p-8 flex items-center justify-between text-left hover:bg-brand-bg transition-colors duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-[8px] bg-brand-bg border border-brand-border flex items-center justify-center text-brand-secondary">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-[24px] font-medium text-brand-primary mb-1">{service.name}</h2>
                    <p className="text-brand-secondary text-[16px]">{service.description}</p>
                  </div>
                </div>
                {expandedService === service.id ? (
                  <ChevronUp className="text-brand-tertiary" size={24} />
                ) : (
                  <ChevronDown className="text-brand-tertiary" size={24} />
                )}
              </button>

              <AnimatePresence>
                {expandedService === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-brand-bg border-t border-brand-border"
                  >
                    <div className="p-8 grid md:grid-cols-2 gap-6">
                      {service.subServices.map((subService, subIndex) => {
                        const isSelected = isServiceSelected(service, subService);
                        return (
                          <div
                            key={subIndex}
                            onClick={() => toggleServiceSelection(service, subService)}
                            className={`p-6 rounded-[8px] bg-brand-surface border transition-all duration-300 cursor-pointer group relative ${
                              isSelected
                                ? 'border-brand-primary'
                                : 'border-brand-border hover:border-brand-tertiary'
                            }`}
                          >
                            <div className="absolute top-6 right-6">
                              <div
                                className={`w-5 h-5 rounded-[4px] border flex items-center justify-center transition-all duration-300 ${
                                  isSelected
                                    ? 'bg-brand-primary border-brand-primary'
                                    : 'border-brand-tertiary group-hover:border-brand-secondary'
                                }`}
                              >
                                {isSelected && <Check size={14} className="text-brand-surface" />}
                              </div>
                            </div>

                            <h3 className="text-[18px] font-medium text-brand-primary mb-3 pr-8">
                              {subService.name}
                            </h3>

                            <p className="text-brand-secondary text-[14px] mb-6 leading-[1.5]">
                              {subService.description}
                            </p>

                            <div className="flex items-center gap-2 mb-6 text-[14px] text-brand-secondary">
                              <Clock size={16} className="text-brand-tertiary" />
                              <span>{subService.deliveryTime}</span>
                            </div>

                            <div className="mb-6">
                              <h4 className="text-[13px] font-medium text-brand-primary mb-3 uppercase tracking-wide">Key Features:</h4>
                              <ul className="space-y-2">
                                {subService.features.slice(0, 3).map((feature, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-[14px] text-brand-secondary">
                                    <span className="text-brand-tertiary mt-1 text-[10px]">▹</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="pt-6 border-t border-brand-border">
                              <p className="text-[20px] text-brand-primary font-medium">{subService.price}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showRequestModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-bg/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setShowRequestModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-brand-surface border border-brand-border rounded-[12px] max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowRequestModal(false)}
                className="absolute top-6 right-6 text-brand-secondary hover:text-brand-primary hover:bg-brand-bg p-2 rounded-[6px] transition-colors duration-300"
              >
                <X size={20} />
              </button>

              <h2 className="text-[28px] font-medium text-brand-primary mb-8 tracking-tight">Submit Your Request</h2>

              <div className="mb-8 p-6 rounded-[8px] bg-brand-bg border border-brand-border">
                <h3 className="text-[16px] font-medium text-brand-primary mb-4 tracking-tight">Selected Services:</h3>
                <div className="space-y-3">
                  {selectedServices.map((item, index) => (
                    <div key={index} className="flex justify-between items-start text-[14px]">
                      <div>
                        <p className="text-brand-primary font-medium">{item.subService.name}</p>
                        <p className="text-brand-secondary">{item.service.name}</p>
                      </div>
                      <p className="text-brand-primary font-medium">{item.subService.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-brand-primary mb-2 font-medium text-[14px]">Name *</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-tertiary" size={18} />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-brand-bg border border-brand-border rounded-[6px] text-brand-primary focus:border-brand-tertiary focus:outline-none focus:ring-0 transition-colors duration-300 placeholder:text-brand-tertiary"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-brand-primary mb-2 font-medium text-[14px]">Email *</label>
                  <div className="relative">
                    <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-tertiary" size={18} />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-brand-bg border border-brand-border rounded-[6px] text-brand-primary focus:border-brand-tertiary focus:outline-none focus:ring-0 transition-colors duration-300 placeholder:text-brand-tertiary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-brand-primary mb-2 font-medium text-[14px]">Message *</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-brand-tertiary" size={18} />
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full pl-12 pr-4 py-3 bg-brand-bg border border-brand-border rounded-[6px] text-brand-primary focus:border-brand-tertiary focus:outline-none focus:ring-0 transition-colors duration-300 resize-none placeholder:text-brand-tertiary"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-brand-button text-brand-secondary font-medium rounded-[6px] hover:bg-brand-button/80 transition-all duration-300 disabled:opacity-50 text-[14px]"
                  >
                    <Mail size={18} />
                    Send via Email
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] text-white font-medium rounded-[6px] hover:bg-[#25D366]/90 transition-all duration-300 disabled:opacity-50 text-[14px]"
                  >
                    <MessageCircle size={18} />
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
