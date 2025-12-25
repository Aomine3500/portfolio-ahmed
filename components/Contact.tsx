
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, Github, Send, CheckCircle, Facebook } from 'lucide-react';
import { ContactInfo, AppContent, UIContent } from '../types';

interface ContactProps {
  contactInfo: ContactInfo;
  ui: UIContent['contact'];
  personalInfo: AppContent['personalInfo'];
}

const Contact: React.FC<ContactProps> = ({ contactInfo, ui, personalInfo }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
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
    <section id="contact" className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">{ui.title}</h2>
            <p className="text-slate-400 mb-10 leading-relaxed text-lg">
              {ui.subtitle}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="p-3.5 bg-slate-800 rounded-xl border border-slate-700 group-hover:border-accent">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-200 mb-1">{ui.phoneLabel}</h3>
                  <div className="flex flex-col space-y-1">
                    {contactInfo.phone.map((num, idx) => (
                       <p key={idx} className="text-slate-400 hover:text-accent transition-colors cursor-pointer">{num}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-3.5 bg-slate-800 rounded-xl border border-slate-700">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-200 mb-1">{ui.emailLabel}</h3>
                  <div className="flex flex-col space-y-1">
                    {contactInfo.email.map((mail, idx) => (
                        <a key={idx} href={`mailto:${mail}`} className="text-slate-400 hover:text-accent transition-colors">
                            {mail}
                        </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-3.5 bg-slate-800 rounded-xl border border-slate-700">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-200 mb-1">{ui.locationLabel}</h3>
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
                            className="p-3 bg-slate-800 border border-slate-700 hover:bg-accent hover:border-accent rounded-full transition-all duration-300 group"
                            title={link.name}
                        >
                            {link.icon}
                        </a>
                    )
                ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white text-slate-900 p-8 md:p-10 rounded-2xl shadow-2xl shadow-black/20">
            <h3 className="text-2xl font-bold mb-8 text-slate-900">{ui.formTitle}</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">{ui.nameLabel}</label>
                <input 
                    type="text" 
                    required
                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none transition-all" 
                    placeholder={ui.nameLabel}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">{ui.emailInputLabel}</label>
                <input 
                    type="email" 
                    required
                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none transition-all" 
                    placeholder="your.email@example.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">{ui.messageLabel}</label>
                <textarea 
                    rows={4} 
                    required
                    className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent focus:outline-none resize-none transition-all" 
                    placeholder={ui.messageLabel + "..."}
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={formStatus !== 'idle'}
                className={`w-full py-4 font-bold rounded-lg transition-all shadow-lg flex items-center justify-center gap-2
                    ${formStatus === 'success' 
                        ? 'bg-green-500 hover:bg-green-600 text-white' 
                        : 'bg-accent hover:bg-sky-600 text-white shadow-sky-500/25'
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
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. {ui.footer}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
