// import React, { useState, useRef } from 'react';
// import { Phone, Mail, MapPin, Linkedin, Github, Send, CheckCircle, Facebook, AlertCircle } from 'lucide-react';
// import emailjs from '@emailjs/browser';
// import { ContactInfo, AppContent, UIContent } from '../types';

// ==========================================
// ⚙️ CONFIGURATION EMAILJS
// ==========================================
// const EMAILJS_CONFIG = {
  // SERVICE_ID: "service_pxxk1ut",   
  // TEMPLATE_ID: "template_65qcolw", 
  // PUBLIC_KEY: "-eaZq4I5RByl6-PLF"    
// };

// interface ContactProps {
  // contactInfo: ContactInfo;
  // ui: UIContent['contact'];
  // personalInfo: AppContent['personalInfo'];
// }

// const Contact: React.FC<ContactProps> = ({ contactInfo, ui, personalInfo }) => {
  // const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  // const [errorMessage, setErrorMessage] = useState<string>('');
  // const form = useRef<HTMLFormElement>(null);

  // const handleSubmit = (e: React.FormEvent) => {
    // e.preventDefault();

    // if (!form.current) return;
    
    // setFormStatus('submitting');
    // setErrorMessage('');

    // emailjs.sendForm(
      // EMAILJS_CONFIG.SERVICE_ID,
      // EMAILJS_CONFIG.TEMPLATE_ID,
      // form.current,
      // EMAILJS_CONFIG.PUBLIC_KEY
    // )
    // .then((result) => {
        // console.log('EmailJS Success:', result.text);
        // setFormStatus('success');
        // if (form.current) form.current.reset();
        
        // setTimeout(() => {
            // setFormStatus('idle');
        // }, 5000);
    // }, (error) => {
        // console.error('EmailJS Error:', error.text);
        // setFormStatus('error');
        // setErrorMessage('Failed to send. Please try again later.');
        
        // setTimeout(() => {
            // setFormStatus('idle');
        // }, 5000);
    // });
  // };

  // const socialLinks = [
    // {
      // name: "LinkedIn",
      // url: contactInfo.linkedin,
      // icon: <Linkedin size={22} className="text-slate-300 group-hover:text-white" />,
    // },
    // {
      // name: "GitHub",
      // url: contactInfo.github,
      // icon: <Github size={22} className="text-slate-300 group-hover:text-white" />,
    // },
    // {
      // name: "Facebook",
      // url: contactInfo.facebook,
      // icon: <Facebook size={22} className="text-slate-300 group-hover:text-white" />,
    // },
    // {
      // name: "X (Twitter)",
      // url: contactInfo.twitter,
      // icon: (
        // <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" className="text-slate-300 group-hover:text-white">
          // <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        // </svg>
      // ),
    // },
    // {
      // name: "Threads",
      // url: contactInfo.threads,
      // icon: (
        // <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300 group-hover:text-white">
          // <path d="M19 12c0-3.86-3.14-7-7-7S5 8.14 5 12s3.14 7 7 7a6.98 6.98 0 0 0 5.42-2.57L19 15" />
          // <path d="M12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
        // </svg>
      // ),
    // }
  // ];

  // return (
    // <section id="contact" className="bg-primary text-white pt-24 pb-12 rounded-t-[3rem] -mt-10 relative z-10">
      // <div className="container mx-auto px-4 md:px-8">
        // <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-16">
          // {/* Contact Info */}
          // <div>
            // <h2 className="text-3xl font-bold mb-6">{ui.title}</h2>
            // <div className="w-12 h-1 bg-accent rounded-full mb-8"></div>
            // <p className="text-slate-400 mb-10 leading-relaxed text-lg">
              // {ui.subtitle}
            // </p>

            // <div className="space-y-8">
              // <div className="flex items-start gap-5 group">
                // <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                  // <Phone className="text-accent group-hover:text-white transition-colors" size={24} />
                // </div>
                // <div>
                  // <h3 className="font-semibold text-white mb-1">{ui.phoneLabel}</h3>
                  // <div className="flex flex-col space-y-1">
                    // {contactInfo.phone.map((num, idx) => (
                       // <p key={idx} className="text-slate-400 hover:text-accent transition-colors cursor-pointer">{num}</p>
                    // ))}
                  // </div>
                // </div>
              // </div>

              // <div className="flex items-start gap-5 group">
                // <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                  // <Mail className="text-accent group-hover:text-white transition-colors" size={24} />
                // </div>
                // <div>
                  // <h3 className="font-semibold text-white mb-1">{ui.emailLabel}</h3>
                  // <div className="flex flex-col space-y-1">
                    // {contactInfo.email.map((mail, idx) => (
                        // <a key={idx} href={`mailto:${mail}`} className="text-slate-400 hover:text-accent transition-colors">
                            // {mail}
                        // </a>
                    // ))}
                  // </div>
                // </div>
              // </div>

              // <div className="flex items-start gap-5 group">
                // <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                  // <MapPin className="text-accent group-hover:text-white transition-colors" size={24} />
                // </div>
                // <div>
                  // <h3 className="font-semibold text-white mb-1">{ui.locationLabel}</h3>
                  // <p className="text-slate-400">{contactInfo.address}</p>
                // </div>
              // </div>
            // </div>

            // <div className="flex flex-wrap gap-4 mt-12">
                // {socialLinks.map((link) => (
                    // link.url && (
                        // <a 
                            // key={link.name}
                            // href={link.url}
                            // target="_blank"
                            // rel="noopener noreferrer"
                            // className="p-3 bg-white/5 border border-white/10 hover:bg-accent hover:border-accent rounded-full transition-all duration-300 group hover:-translate-y-1"
                            // title={link.name}
                        // >
                            // {link.icon}
                        // </a>
                    // )
                // ))}
            // </div>
          // </div>

          // {/* Contact Form */}
          // <div className="bg-white text-primary p-8 md:p-12 rounded-3xl shadow-2xl shadow-black/20">
            // <h3 className="text-2xl font-bold mb-8 text-primary">{ui.formTitle}</h3>
            
            // <form ref={form} className="space-y-5" onSubmit={handleSubmit}>
              // <div>
                // <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wider">{ui.nameLabel}</label>
                // <input 
                    // type="text" 
                    // name="user_name"
                    // required
                    // className="w-full px-5 py-4 bg-surface border-2 border-transparent focus:border-accent rounded-xl focus:outline-none transition-all font-medium" 
                    // placeholder={ui.nameLabel}
                // />
              // </div>
              // <div>
                // <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wider">{ui.emailInputLabel}</label>
                // <input 
                    // type="email" 
                    // name="user_email"
                    // required
                    // className="w-full px-5 py-4 bg-surface border-2 border-transparent focus:border-accent rounded-xl focus:outline-none transition-all font-medium" 
                    // placeholder="hello@example.com" 
                // />
              // </div>
              // <div>
                // <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-wider">{ui.messageLabel}</label>
                // <textarea 
                    // name="message"
                    // rows={4} 
                    // required
                    // className="w-full px-5 py-4 bg-surface border-2 border-transparent focus:border-accent rounded-xl focus:outline-none resize-none transition-all font-medium" 
                    // placeholder={ui.messageLabel + "..."}
                // ></textarea>
              // </div>
              
              // <button 
                // type="submit"
                // disabled={formStatus === 'submitting'}
                // className={`w-full py-4 font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 transform active:scale-95
                    // ${formStatus === 'success' 
                        // ? 'bg-green-500 hover:bg-green-600 text-white' 
                        // : formStatus === 'error'
                        // ? 'bg-red-500 hover:bg-red-600 text-white'
                        // : 'bg-primary hover:bg-[#34495e] text-white shadow-primary/30'
                    // } ${formStatus === 'submitting' ? 'opacity-75 cursor-wait' : ''}`}
              // >
                // {formStatus === 'idle' && (
                    // <>{ui.sendBtn} <Send size={18} /></>
                // )}
                // {formStatus === 'submitting' && (
                    // <span>{ui.sendingBtn}</span>
                // )}
                // {formStatus === 'success' && (
                    // <>{ui.sentBtn} <CheckCircle size={18} /></>
                // )}
                // {formStatus === 'error' && (
                    // <>Error <AlertCircle size={18} /></>
                // )}
              // </button>
              
              // {errorMessage && (
                  // <p className="text-red-500 text-sm text-center mt-2">{errorMessage}</p>
              // )}
            // </form>
          // </div>
        // </div>

        // <div className="border-t border-white/10 pt-8 text-center text-slate-400 text-sm">
          // <p>&copy; {new Date().getFullYear()} {personalInfo.name}. {ui.footer}</p>
        // </div>
      // </div>
    // </section>
  // );
// };

// export default Contact;

import { AppContent } from './types';

// CORRECTION DES IMAGES :
// Les liens ont été convertis en "Lien Direct" (Direct Link) pour pointer vers le fichier image.
// Format utilisé : https://i.imgur.com/[ID].jpeg

const PROFILE_IMAGE_URL = "https://i.imgur.com/OzNgKWc.jpeg"; 
const GAZTRACK_IMAGE_URL = "https://i.imgur.com/GSs9ZZN.jpeg";

const contactInfoBase = {
  phone: ["+216 92 258 245"],
  email: ["ahmed.znouda@gmail.com"],
  linkedin: "https://www.linkedin.com/in/ahmedznouda/",
  github: "https://github.com/Aomine3500",
  facebook: "https://www.facebook.com/ahmadZNOUDA",
  twitter: "https://x.com/AhmedZnouda",
  threads: "https://www.threads.com/@ahmadznouda"
};

export const content: { en: AppContent; fr: AppContent } = {
  en: {
    personalInfo: {
      name: "Ahmed Znouda",
      title: "Senior Software Developer",
      about: "Accomplished Software Developer with over 8 years of experience in professional and freelance software engineering. Proficient in full-stack JavaScript development, with a strong focus on the MERN stack. Since 2022, I have been actively developing cross-platform mobile applications using Flutter, with two projects delivered or in progress. Holds a Master’s degree in Computer Science and a Bachelor’s degree in Computational Science, along with an English B2 certification. Currently training in prompt engineering to enhance AI-assisted development workflows. Recognized for delivering effective, client-oriented software solutions.",
      heroImage: PROFILE_IMAGE_URL,
    },
    contactInfo: {
      ...contactInfoBase,
      address: "82 Rue Wahran, Soliman, Nabeul",
    },
    experiences: [
      {
        id: 1,
        role: "Freelance Software Developer",
        company: "Freelance / Remote Work",
        location: "Tunisia",
        period: "02/2022 - Present",
        description: [
          "Developed web, mobile, and desktop applications using PCSoft WinDev, WebDev, MERN JS, and Flutter.",
          "Designed user-friendly interfaces to enhance user experience.",
          "Integrated third-party APIs to expand application functionalities.",
          "Conducted code reviews to uphold high-quality software standards.",
          "Collaborated with clients to innovate applications that meet specifications."
        ],
        isCurrent: true
      },
      {
        id: 2,
        role: "Developer and Technical Assistant",
        company: "Business News Consulting",
        location: "Hammam-Lif, Tunisia",
        period: "09/2018 - 09/2022",
        description: [
          "Developed and implemented 'Balance Management' application for BONNA Tunisia.",
          "Managed and maintained applications including Payroll, Accounting, GestComprod, and Immo for Business News Consulting.",
          "Conducted hardware and software maintenance for Business News Consulting's systems.",
          "Collaborated with cross-functional teams to enhance application performance and user experience.",
          "Provided technical support and training to end-users, ensuring optimal utilization of software solutions."
        ]
      },
      {
        id: 3,
        role: "Technical Back Office",
        company: "YM Call Center",
        location: "Tunis, Tunisia",
        period: "11/2016 - 06/2018",
        description: [
          "Deployed, installed, and configured software solutions, ensuring optimal performance and security.",
          "Handled incidents with technical analysis and follow-up, resolving issues efficiently.",
          "Collaborated with cross-functional teams to streamline software deployment processes.",
          "Documented system configurations and incident resolutions for knowledge sharing.",
          "Provided technical support and training to enhance team capabilities."
        ]
      },
      {
        id: 4,
        role: "Help Desk Analyst",
        company: "Ivocall Center",
        location: "Hammam-Lif, Tunisia",
        period: "02/2016 - 11/2016",
        description: [
          "Call Taking and User Intervention Remote Grip (Citrix).",
          "Interventions on Outlook.",
          "Active Directory Account Creation."
        ]
      }
    ],
    education: [
      {
        id: 10,
        degree: "Flutter Development Certification",
        institution: "Coursera",
        location: "Online",
        period: "01/2024 - 05/2024",
        details: "Professional Certificate in Flutter Development."
      },
      {
        id: 11,
        degree: "Full Stack JS Developer (MERN)",
        institution: "GoMyCode",
        location: "Tunisia",
        period: "01/2021 - 06/2021",
        details: "Intensive bootcamp focused on MERN stack."
      },
      {
        id: 1,
        degree: "Master's Degree in Computer Science",
        institution: "Faculty of Mathematical, Physical and Natural Sciences of Tunis",
        location: "Tunis, Tunisia",
        period: "09/2013 - 08/2015",
        details: "Major: Pervasive Systems. Graduated with Honors."
      },
      {
        id: 2,
        degree: "Bachelor’s degree in Computer Science",
        institution: "Faculty of Mathematical, Physical and Natural Sciences of Tunis",
        location: "Tunis, Tunisia",
        period: "09/2010 - 06/2013",
        details: "Major: Computer Sciences. Graduated with High Honors."
      },
      {
        id: 3,
        degree: "English B1 Certification in English",
        institution: "Amideast Tunisia",
        location: "Tunis, Tunisia",
        period: "01/2013 - 06/2013",
        details: "Graduated with High Honors."
      },
      {
        id: 4,
        degree: "High School Degree in Computer Sciences",
        institution: "Secondary School Soliman",
        location: "Soliman, Tunisia",
        period: "09/2009 - 06/2010",
        details: "Graduated with High Honors."
      }
    ],
    skillCategories: [
      {
        name: "Development Skills",
        skills: ["ExpressJS", "Flutter", "JavaScript", "NodeJS", "ReactJS", "WinDev", "MERN Stack"]
      },
      {
        name: "Database Management",
        skills: ["MariaDB", "MongoDB", "MySQL", "PostgreSQL", "SQL Server"]
      },
      {
        name: "Management & Communication",
        skills: ["Client Communication", "Problem-Solving", "Project Management"]
      },
      {
        name: "Client Assistance & Tools",
        skills: ["Active Directory", "AnyDesk", "TeamViewer", "Citrix"]
      },
      {
        name: "Windows & Office",
        skills: ["Windows 365 Suite", "Windows Office Suite"]
      }
    ],
    projects: [
      {
        id: 1,
        title: "Gaztrack Pro",
        description: "A modern cross-platform application (Web & Mobile) designed to streamline the distribution and management of gas bottles. Features include inventory tracking, delivery management, and reporting.",
        techStack: ["Flutter", "Dart", "Firebase", "Google Maps API"],
        type: "Mobile",
        image: GAZTRACK_IMAGE_URL
      },
      {
        id: 2,
        title: "Balance Management System",
        description: "An industrial application developed for BONNA Tunisia to manage weighing scales and integration with the central ERP system.",
        techStack: ["WinDev", "SQL Server", "Serial Port Comm"],
        type: "Desktop",
        image: "https://picsum.photos/id/2/600/400"
      }
    ],
    ui: {
      nav: [
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Experience', href: '#experience', id: 'experience' },
        { name: 'Skills', href: '#skills', id: 'skills' },
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'Education', href: '#education', id: 'education' },
        { name: 'Contact', href: '#contact', id: 'contact' },
      ],
      hero: {
        contactBtn: "Contact Me",
        downloadBtn: "Download CV",
        scroll: "Scroll",
        roles: ["Senior Software Developer", "Flutter Developer", "MERN Stack Expert"]
      },
      about: {
        title: "About Me",
        cards: {
          frontend: { title: "Frontend", desc: "ReactJS, Flutter, TypeScript" },
          backend: { title: "Backend", desc: "NodeJS, MongoDB, SQL" },
          legacy: { title: "Legacy", desc: "WinDev, Desktop Apps" },
        }
      },
      experience: {
        title: "Work Experience",
        subtitle: "My professional journey and career milestones",
        currentBadge: "Current"
      },
      skills: {
        title: "Technical Skills",
        subtitle: "Technologies and tools I work with",
        searchPlaceholder: "Search a skill (e.g., React, SQL)..."
      },
      projects: {
        title: "Featured Projects",
        subtitle: "Highlights from my development portfolio",
        sourceBtn: "Source",
        demoBtn: "Demo",
        filters: {
          all: "All Projects",
          mobile: "Mobile",
          web: "Web",
          desktop: "Desktop"
        }
      },
      education: {
        title: "Education & Certifications",
        subtitle: "Academic background and professional development"
      },
      contact: {
        title: "Let's Work Together",
        subtitle: "I am currently available for freelance projects or full-time opportunities. Whether you have a question about Flutter, MERN stack, or just want to say hi, I'll try my best to get back to you!",
        phoneLabel: "Phone",
        emailLabel: "Email",
        locationLabel: "Location",
        formTitle: "Send a Message",
        nameLabel: "Name",
        emailInputLabel: "Email",
        messageLabel: "Message",
        sendBtn: "Send Message",
        sendingBtn: "Sending...",
        sentBtn: "Message Sent!",
        footer: "All rights reserved."
      }
    }
  },
  fr: {
    personalInfo: {
      name: "Ahmed Znouda",
      title: "Développeur Logiciel Senior",
      about: "Développeur logiciel accompli avec plus de 8 ans d'expérience en ingénierie logicielle professionnelle et freelance. Compétent en développement JavaScript full-stack, avec une forte spécialisation sur la stack MERN. Depuis 2022, je développe activement des applications mobiles multiplateformes utilisant Flutter. Titulaire d'un Master en Informatique et d'une Licence en Sciences Informatiques, ainsi qu'une certification Anglais B2. Actuellement en formation sur le prompt engineering pour améliorer les flux de développement assistés par l'IA.",
      heroImage: PROFILE_IMAGE_URL,
    },
    contactInfo: {
      ...contactInfoBase,
      address: "82 Rue Wahran, Soliman, Nabeul",
    },
    experiences: [
      {
        id: 1,
        role: "Développeur Logiciel Freelance",
        company: "Freelance / Télétravail",
        location: "Tunisie",
        period: "02/2022 - Présent",
        description: [
          "Développement d'applications web, mobiles et desktop utilisant PCSoft WinDev, WebDev, MERN JS et Flutter.",
          "Conception d'interfaces conviviales pour améliorer l'expérience utilisateur.",
          "Intégration d'API tierces pour étendre les fonctionnalités des applications.",
          "Réalisation de revues de code pour maintenir des standards de qualité élevés.",
          "Collaboration avec les clients pour innover et créer des applications répondant aux spécifications."
        ],
        isCurrent: true
      },
      {
        id: 2,
        role: "Développeur et Assistant Technique",
        company: "Business News Consulting",
        location: "Hammam-Lif, Tunisie",
        period: "09/2018 - 09/2022",
        description: [
          "Développement et mise en œuvre de l'application 'Gestion Balance' pour BONNA Tunisie.",
          "Gestion et maintenance des applications, y compris Paie, Comptabilité, GestComprod et Immo pour Business News Consulting.",
          "Maintenance matérielle et logicielle des systèmes de Business News Consulting.",
          "Collaboration avec des équipes interfonctionnelles pour améliorer la performance des applications.",
          "Support technique et formation des utilisateurs finaux."
        ]
      },
      {
        id: 3,
        role: "Back Office Technique",
        company: "YM Call Center",
        location: "Tunis, Tunisie",
        period: "11/2016 - 06/2018",
        description: [
          "Déploiement, installation et configuration de solutions logicielles, assurant performance et sécurité.",
          "Gestion des incidents avec analyse technique et suivi.",
          "Collaboration avec les équipes pour rationaliser les processus de déploiement logiciel.",
          "Documentation des configurations système et des résolutions d'incidents.",
          "Support technique et formation pour améliorer les capacités de l'équipe."
        ]
      },
      {
        id: 4,
        role: "Analyste Help Desk",
        company: "Ivocall Center",
        location: "Hammam-Lif, Tunisie",
        period: "02/2016 - 11/2016",
        description: [
          "Prise d'appels et intervention utilisateur à distance (Citrix).",
          "Interventions sur Outlook.",
          "Création de comptes Active Directory."
        ]
      }
    ],
    education: [
      {
        id: 10,
        degree: "Certification Développement Flutter",
        institution: "Coursera",
        location: "En ligne",
        period: "01/2024 - 05/2024",
        details: "Certificat Professionnel en développement Flutter."
      },
      {
        id: 11,
        degree: "Développeur Full Stack JS (MERN)",
        institution: "GoMyCode",
        location: "Tunisie",
        period: "01/2021 - 06/2021",
        details: "Bootcamp intensif centré sur la stack MERN."
      },
      {
        id: 1,
        degree: "Master en Informatique",
        institution: "Faculté des Sciences Mathématiques, Physiques et Naturelles de Tunis",
        location: "Tunis, Tunisia",
        period: "09/2013 - 08/2015",
        details: "Spécialité : Systèmes Pervasifs. Diplômé avec Mention."
      },
      {
        id: 2,
        degree: "Licence en Sciences Informatiques",
        institution: "Faculté des Sciences Mathématiques, Physiques et Naturelles de Tunis",
        location: "Tunis, Tunisia",
        period: "09/2010 - 06/2013",
        details: "Spécialité : Informatique. Diplômé avec Mention Très Bien."
      },
      {
        id: 3,
        degree: "Certification Anglais B1",
        institution: "Amideast Tunisia",
        location: "Tunis, Tunisia",
        period: "01/2013 - 06/2013",
        details: "Diplômé avec Mention Très Bien."
      },
      {
        id: 4,
        degree: "Baccalauréat Sciences de l'Informatique",
        institution: "Lycée Secondaire Soliman",
        location: "Soliman, Tunisie",
        period: "09/2009 - 06/2010",
        details: "Diplômé avec Mention Très Bien."
      }
    ],
    skillCategories: [
      {
        name: "Compétences de Développement",
        skills: ["ExpressJS", "Flutter", "JavaScript", "NodeJS", "ReactJS", "WinDev", "MERN Stack"]
      },
      {
        name: "Base de Données",
        skills: ["MariaDB", "MongoDB", "MySQL", "PostgreSQL", "SQL Server"]
      },
      {
        name: "Gestion & Communication",
        skills: ["Communication Client", "Résolution de problèmes", "Gestion de Projet"]
      },
      {
        name: "Assistance Client & Outils",
        skills: ["Active Directory", "AnyDesk", "TeamViewer", "Citrix"]
      },
      {
        name: "Windows & Bureautique",
        skills: ["Windows 365 Suite", "Suite Microsoft Office"]
      }
    ],
    projects: [
      {
        id: 1,
        title: "Gaztrack Pro",
        description: "Une application multiplateforme moderne (Web & Mobile) conçue pour rationaliser la distribution et la gestion des bouteilles de gaz. Fonctionnalités incluant le suivi des stocks, la gestion des livraisons et le reporting.",
        techStack: ["Flutter", "Dart", "Firebase", "API Google Maps"],
        type: "Mobile",
        image: GAZTRACK_IMAGE_URL
      },
      {
        id: 2,
        title: "Système de Gestion de Balance",
        description: "Une application industrielle développée pour BONNA Tunisia afin de gérer les ponts-bascules et l'intégration avec le système ERP central.",
        techStack: ["WinDev", "SQL Server", "Comm Port Série"],
        type: "Desktop",
        image: "https://picsum.photos/id/2/600/400"
      }
    ],
    ui: {
      nav: [
        { name: 'À propos', href: '#about', id: 'about' },
        { name: 'Expérience', href: '#experience', id: 'experience' },
        { name: 'Compétences', href: '#skills', id: 'skills' },
        { name: 'Projets', href: '#projects', id: 'projects' },
        { name: 'Éducation', href: '#education', id: 'education' },
        { name: 'Contact', href: '#contact', id: 'contact' },
      ],
      hero: {
        contactBtn: "Me Contacter",
        downloadBtn: "Télécharger CV",
        scroll: "Défiler",
        roles: ["Développeur Senior", "Développeur Flutter", "Expert MERN Stack"]
      },
      about: {
        title: "À propos de moi",
        cards: {
          frontend: { title: "Frontend", desc: "ReactJS, Flutter, TypeScript" },
          backend: { title: "Backend", desc: "NodeJS, MongoDB, SQL" },
          legacy: { title: "Legacy", desc: "WinDev, App Desktop" },
        }
      },
      experience: {
        title: "Expérience Professionnelle",
        subtitle: "Mon parcours professionnel et mes étapes clés",
        currentBadge: "Actuel"
      },
      skills: {
        title: "Compétences Techniques",
        subtitle: "Technologies et outils que je maîtrise",
        searchPlaceholder: "Rechercher une compétence (ex: React, SQL)..."
      },
      projects: {
        title: "Projets Réalisés",
        subtitle: "Points forts de mon portfolio de développement",
        sourceBtn: "Code",
        demoBtn: "Démo",
        filters: {
          all: "Tous",
          mobile: "Mobile",
          web: "Web",
          desktop: "Desktop"
        }
      },
      education: {
        title: "Éducation & Certifications",
        subtitle: "Parcours académique et développement professionnel"
      },
      contact: {
        title: "Travaillons Ensemble",
        subtitle: "Je suis actuellement disponible pour des projets freelance ou des opportunités à temps plein. Que vous ayez une question sur Flutter, la stack MERN, ou simplement pour dire bonjour, je ferai de mon mieux pour vous répondre !",
        phoneLabel: "Téléphone",
        emailLabel: "Email",
        locationLabel: "Localisation",
        formTitle: "Envoyer un message",
        nameLabel: "Nom",
        emailInputLabel: "Email",
        messageLabel: "Message",
        sendBtn: "Envoyer",
        sendingBtn: "Envoi...",
        sentBtn: "Envoyé !",
        footer: "Tous droits réservés."
      }
    }
  }
};