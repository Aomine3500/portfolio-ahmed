import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Linkedin, Github, Send, CheckCircle, Facebook, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { ContactInfo, AppContent, UIContent } from '../types';

// ==========================================
// ⚙️ CONFIGURATION EMAILJS
// ==========================================
const EMAILJS_CONFIG = {
  SERVICE_ID: "service_pxxk1ut",   
  TEMPLATE_ID: "template_65qcolw", 
  PUBLIC_KEY: "-eaZq4I5RByl6-PLF"    
};

interface ContactProps {
  contactInfo: ContactInfo;
  ui: UIContent['contact'];
  personalInfo: AppContent['personalInfo'];
}

const Contact: React.FC<ContactProps> = ({ contactInfo, ui, personalInfo }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;
    
    setFormStatus('submitting');
    setErrorMessage('');

    emailjs.sendForm(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      form.current,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
    .then((result) => {
        console.log('EmailJS Success:', result.text);
        setFormStatus('success');
        if (form.current) form.current.reset();
        
        setTimeout(() => {
            setFormStatus('idle');
        }, 5000);
    }, (error) => {
        console.error('EmailJS Error:', error.text);
        setFormStatus('error');
        setErrorMessage('Failed to send. Please try again later.');
        
        setTimeout(() => {
            setFormStatus('idle');
        }, 5000);
    });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: contactInfo.linkedin,
      icon: <Linkedin size={22} className="text-slate-300 group-hover:text-white" />,
    },
    {
      name: "GitHub",
      url: contactInfo.github,
      icon: <Github size={22} className="text-slate-300 group-hover:text-white" />,
    },
    {
      name: "Facebook",
      url: contactInfo.facebook,
      icon: <Facebook size={22} className="text-slate-300 group-hover:text-white" />,
    },
    {
      name: "X (Twitter)",
      url: contactInfo.twitter,
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" className="text-slate-300 group-hover:text-white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Threads",
      url: contactInfo.threads,
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300 group-hover:text-white">
          <path d="M19 12c0-3.86-3.14-7-7-7S5 8.14 5 12s3.14 7 7 7a6.98 6.98 0 0 0 5.42-2.57L19 15" />
          <path d="M12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
        </svg>
      ),
    }
  ];

  return (
    <section id="contact" className="bg-primary text-white pt-24 pb-12 rounded-t-[3rem] -mt-10 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">{ui.title}</h2>
            <div className="w-12 h-1 bg-accent rounded-full mb-8"></div>
            <p className="text-slate-400 mb-10 leading-relaxed text-lg">
              {ui.subtitle}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                  <Phone className="text-accent group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{ui.phoneLabel}</h3>
                  <div className="flex flex-col space-y-1">
                    {contactInfo.phone.map((num, idx) => (
                       <p key={idx} className="text-slate-400 hover:text-accent transition-colors cursor-pointer">{num}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                  <Mail className="text-accent group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{ui.emailLabel}</h3>
                  <div className="flex flex-col space-y-1">
                    {contactInfo.email.map((mail, idx) => (
                        <a key={idx} href={`mailto:${mail}`} className="text-slate-400 hover:text-accent transition-colors">
                            {mail}
                        </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                  <MapPin className="text-accent group-hover:text-white transition-colors" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{ui.locationLabel}</h3>
                  <p className="text-slate-400">{contactInfo.address}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-12">
                {socialLinks.map((link) => (
                    link.url && (
                        <a 
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 border border-white/10 hover:bg-accent hover:border-accent rounded-full transition-all duration-300 group hover:-translate-y-1"
                            title={link.name}
                        >
                            {link.icon}
                        </a>
                    )
                ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white text-primary p-8 md:p-12 rounded-3xl shadow-2xl shadow-black/20">
            <h3 className="text-2xl font-bold mb-8 text-primary">{ui.formTitle}</h3>
            
            <form ref={form} className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wider">{ui.nameLabel}</label>
                <input 
                    type="text" 
                    name="user_name"
                    required
                    className="w-full px-5 py-4 bg-surface border-2 border-transparent focus:border-accent rounded-xl focus:outline-none transition-all font-medium" 
                    placeholder={ui.nameLabel}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wider">{ui.emailInputLabel}</label>
                <input 
                    type="email" 
                    name="user_email"
                    required
                    className="w-full px-5 py-4 bg-surface border-2 border-transparent focus:border-accent rounded-xl focus:outline-none transition-all font-medium" 
                    placeholder="hello@example.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wider">{ui.messageLabel}</label>
                <textarea 
                    name="message"
                    rows={4} 
                    required
                    className="w-full px-5 py-4 bg-surface border-2 border-transparent focus:border-accent rounded-xl focus:outline-none resize-none transition-all font-medium" 
                    placeholder={ui.messageLabel + "..."}
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={formStatus === 'submitting'}
                className={`w-full py-4 font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 transform active:scale-95
                    ${formStatus === 'success' 
                        ? 'bg-green-500 hover:bg-green-600 text-white' 
                        : formStatus === 'error'
                        ? 'bg-red-500 hover:bg-red-600 text-white'
                        : 'bg-primary hover:bg-[#34495e] text-white shadow-primary/30'
                    } ${formStatus === 'submitting' ? 'opacity-75 cursor-wait' : ''}`}
              >
                {formStatus === 'idle' && (
                    <>{ui.sendBtn} <Send size={18} /></>
                )}
                {formStatus === 'submitting' && (
                    <span>{ui.sendingBtn}</span>
                )}
                {formStatus === 'success' && (
                    <>{ui.sentBtn} <CheckCircle size={18} /></>
                )}
                {formStatus === 'error' && (
                    <>Error <AlertCircle size={18} /></>
                )}
              </button>
              
              {errorMessage && (
                  <p className="text-red-500 text-sm text-center mt-2">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. {ui.footer}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;