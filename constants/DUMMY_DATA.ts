import { GlobalContent } from "models/contentful/globalContent";
import { HomepageContent } from "models/contentful/homepage/homepageContent";

export const DUMMY_GLOBAL_CONTENT: GlobalContent = {
  footerCopywriteText: '© Aussie Rollers 2023',
  siteTitle: 'Aussie Rollers',
  instagramUrl: '/gram/dettl',
  contactEmail: 'max.dettl98@gmail.com',
  mobile: '0416561552',
  logo: {
    url: '/assets/images/should-be-contentful/logo.webp'
  },
  navCtaText: 'Enquire',
}

export const DUMMY_HOMEPAGE_CONTENT: HomepageContent = {
  heroTitle: 'Brazilian Jiu Jitsu for youth',
  heroImage: {
    url: '/assets/images/should-be-contentful/hero.webp'
  },
  heroSubtitle: 'Brisbane-based after-school BJJ lessons and vacation care.',
  heroCtaText: 'Enquire now',
  heroReview: {
    content: "After just a few sessions, I saw a dramatic difference in my children’s confidence, self-discipline, and overall behaviour. Each session is packed with high-energy fun, and the skills they have learnt with Max have been immeasurable - on and off the mats!",
    title: "Best vacation care in Brisbane!", 
    name: "Krissy", 
    headshotUrl: '',
  },
  whatSectionTitle: "What is BJJ?",
  whatSectionSubtitle: "Brazilian Jiu Jitsu is a martial art and self defense system that focuses on grappling and ground combat.  In BJJ you learn to control your opponent without throwing a single strike.",
  whatSectionListItems: [
    {
      name: 'Teamwork',
      content: "BJJ nurtures a strong sense of teamwork by encouraging students to communicate and cooperate effectively, fostering camaraderie and respect for others."
    },
    {
      name: 'Resilience',
      content: "Practicing BJJ cultivates resilience in students by helping them manage setbacks and recover from adversity, enhancing their mental toughness and determination."
    },
    {
      name: 'Conflict Resolution',
      content: "BJJ teaches students the importance of non-violent conflict resolution and how to respond to conflicts in a controlled manner."
    },
    {
      name: 'Problem Solving',
      content: "BJJ enhances strategic thinking and decision-making skills by presenting students with complex scenarios that require innovative problem-solving abilities."
    },
    {
      name: 'Leadership',
      content: "BJJ provides opportunities for students to take on leadership roles and fosters personal growth, enabling them to inspire and guide others."
    },
    {
      name: 'Physical Activity',
      content: "BJJ, a physically demanding sport, promotes healthy, active lifestyles, fostering positive habits and routines for overall wellbeing and mental health."
    },
  ],
  
  teamSectionTitle: "Meet our team",
  teamSectionSubtitle: "A BJJ professional and two teacher-trainees; all certified in CPR, first aid, and blue cards, forging unique BJJ experiences.",
  team: [
    {
      name: "Max Dettl",
      jobTitle: "Head instructor",
      content: "One of Brisbane’s top BJJ competitors, with seasoned coaching and OSHC experience, Max brings unmatched expertise to Aussie Rollers.",
      headshotImage: {
        url: '/assets/images/should-be-contentful/max-headshot.webp'
      }
    },
    {
      name: "Claire Worland",
      jobTitle: "Operations",
      content: "Soon to finish her Master’s in Teaching and enriched with OSHC experience, Claire infuses her passion for children's wellbeing into Aussie Rollers' programs.",
      headshotImage: {
        url: '/assets/images/should-be-contentful/claire-headshot.webp'
      }
    },
    {
      name: "Rory Dakers",
      jobTitle: "Instructor",
      content: "Rory, an accomplished BJJ competitor and Bachelor of Education student at UQ, integrates his extensive OSHC experience and BJJ knowledge.",
      headshotImage: {
        url: '/assets/images/should-be-contentful/rory-headshot.webp'
      }
    },
  ],
  faqSectionTitle: 'FAQ',
  faqs: [
    {
      question: "Is BJJ safe?",
      answer: "Absolutely. Just like any sport, BJJ is safe with instructors constantly monitoring to minimize risk."
    },
    {
      question: "Is BJJ good for kids?",
      answer: "Undoubtedly! BJJ not only enhances physical fitness and confidence, but also empowers them with self-defense skills."
    },
    {
      question: "Can both girls and boys do BJJ?",
      answer: "Yes, BJJ is gender-neutral and beneficial for both girls and boys."
    },
    {
      question: "How are classes structured?",
      answer: "Each class includes a warm-up, technique instruction, and concludes with practical games applying the taught techniques."
    },
    {
      question: "How should I prepare?",
      answer: "No specific preparation is necessary. However, we are available to address any questions or concerns."
    },
    {
      question: "What do I need to bring?",
      answer: "Simply bring yourself! We provide uniforms for new students and assist in procuring personal ones for continued training."
    },
    {
      question: "What will I learn?",
      answer: "BJJ students acquire a range of skills from movement techniques to martial arts strategies."
    },
    {
      question: "What is the right age to start BJJ?",
      answer: "Typically, children aged 4 and above are suitable for BJJ. Exceptions do exist and can be discussed with us directly."
    },
    {
      question: "What level of fitness or previous experience is required?",
      answer: "BJJ welcomes all! No foundational fitness level or prior experience is necessary."
    },
    {
      question: "Who can I contact to find out more?",
      answer: "Feel free to connect with us at 0416561552, aussierollersbjj@gmail.com, or on our Instagram @aussierollersbjj."
    },
    {
      question: "How do I get started?",
      answer: "To begin, complete our enquiry form and our team will reach out. Alternatively, direct contact is always welcome!"
    },
  ],
  contactSectionLeftTitle: 'Welcome to our community',
  contactSectionImage: {
    url: '/assets/images/should-be-contentful/group-photo.webp'
  },
  contactSectionRightTitle: 'Join Aussie Rollers',
  contactSectionReview: {
    content: "Max’s unwavering dedication and personalized guidance have fostered a supportive, inclusive community where my kids have thrived.",
    title: "My kids have thrived.", 
    name: "Dani", 
    headshotUrl: '',
  },
  contactSectionSubtitle: "To discover how our tailored BJJ programs can benefit your school, fill out the form below and we'll be in touch promptly.",
  contactSectionButtonText: "Submit Enquiry",
}
