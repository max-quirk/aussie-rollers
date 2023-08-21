import { GlobalContent } from "models/contentful/globalContent";
import { HomepageContent } from "models/contentful/homepage/homepageContent";

export const DUMMY_GLOBAL_CONTENT: GlobalContent = {
  footerCopywriteText: '© Aussie Rollers 2023',
  siteTitle: 'Aussie Rollers',
  instagramUrl: 'https://instagram.com/aussierollersbjj?igshid=Y2IzZGU1MTFhOQ==',
  contactEmail: 'info@aussierollersbjj.com.au',
  mobile: '+61416561552',
  logo: {
    url: '/assets/images/should-be-contentful/logo.webp'
  },
  navCtaText: 'Enquire',
}

export const DUMMY_HOMEPAGE_CONTENT: HomepageContent = {
  heroTitle: 'Brazilian Jiu-Jitsu Camps and Programs',
  heroImage: {
    url: '/assets/images/should-be-contentful/logo-big.webp'
  },
  heroSubtitle: 'Brisbane-Based BJJ: After-School Programs, OSHC Incursions, NDIS Programs, Grappling for Contact Sport and Private Lessons.',
  heroCtaText: 'Enquire now',
  heroReview: {
    content: "After just a few sessions, I saw a dramatic difference in my children’s confidence, self-discipline, and overall behaviour. Each session is packed with high-energy fun, and the skills they have learnt with Max have been immeasurable - on and off the mats!",
    title: "Immeasurable skills - on and off the mat!", 
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
      content: "BJJ teaches students the importance of cooperative conflict resolution and how to respond to conflicts in a controlled manner."
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
  teamSectionSubtitle: "Experienced Coaching  -  OSHC and Teaching Experience  -  First Aid/CPR Trained  -  Blue Card and Police Checked",
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
      content: "Soon to finish her Master’s in Teaching and enriched with OSHC experience, Claire brings incorporates her passion for children's wellbeing into Aussie Rollers' programs.",
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
  faqSectionTitle: 'FAQs',
  faqs: [
    {
      question: "Is BJJ safe?",
      answer: "Absolutely, BJJ is very safe. We run risk assessments on all of our sessions and our instructors are constantly monitoring to ensure any potential risk is avoided."
    },
    {
      question: "Is BJJ good for kids?",
      answer: "Undoubtedly! BJJ not only enhances physical fitness and confidence, but also empowers them with self-defense skills."
    },
    {
      question: "Can both girls and boys do BJJ?",
      answer: "Yes! BJJ can be practiced by everyone, regardless of their gender."
    },
    {
      question: "How are classes structured?",
      answer: "Classes are program dependent but generally each class includes a warm-up, technical instruction and concludes with games or technique specific drills."
    },
    {
      question: "How should I prepare?",
      answer: "No preparation is necessary. However, if you have any hesitations, feel free to contact us!"
    },
    {
      question: "What do I need to bring?",
      answer: "We provide uniforms, all the required equipment and are able to assist in providing personal gear for students if requested."
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
      answer: "Feel free to connect with us at 0416-561-552, info@aussierollersbjj.com.au, or on our Instagram @aussierollersbjj."
    },
    {
      question: "How do I get started?",
      answer: "To begin, complete our enquiry form and our team will reach out. Alternatively, contact us directly!"
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
  contactSectionSubtitle: "To discover how our tailored BJJ programs can benefit you, fill out the form below and we will be in touch shortly!",
  contactSectionButtonText: "Submit Enquiry",
}
