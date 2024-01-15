import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Joel Machado",
  initials: "JM",
  location: "Bangalore, India",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "ML undergrad, full stack developer",
  summary:
    "Fourth-year Al-ML engineering student passionate about creating tech products. Built mobile and web applications, worked on AI and web3, particpated in multiple hackathons.",
  contact: {
    email: "joelmachado649@gmail.com",
    tel: "+917899984154",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/joel0x",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/joel-machado-0a2917243/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/joemac042",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "MVJ College of Engineering",
      degree: "Engineering degree in Artifical intelligence and machine learning",
      start: "2020",
      end: "2024",
      // percentage:"84"
    },
  ],
  work: [
    {
      company: "Web3 Tech Labs",
      link:"",
      badges: ["Remote"],
      title: "Full Stack Developer Intern",
      logo: "",
      start: "Sept 2023",
      end: "Dec 2023",
      description:
        "Built a mobile application called Wingman using react native, an AI-assisted conversational app. Developed a Chrome extension for fashion products using the SerpAPI - Google Lens API.",
    },
      {
        company: "Web3 Tech Labs",
        link:"",
        badges: ["Remote"],
        title: "Full Stack Developer Intern",
        logo: "",
        start: "Sept 2023",
        end: "Dec 2023",
        description:
          "Built a mobile application called Wingman using react native, an AI-assisted conversational app. Developed a Chrome extension for fashion products using the SerpAPI - Google Lens API.",
      },
  ],
  skills: [
    "JavaScript",
    "Python",
    "React/React native/Next.js",
    "Node.js",
    "NLP",
    "Deep Learning",
    "Fine Tuning",
    "DSA",
    "ML algos",
    "Tensor flow",
    "MongoDB",
    "Smart Contracts"
    
  ],
  projects: [

    {
      title: "AI-Doc",
      techStack: ["Side Project", "Python", "Random forest algo", "Decision tree algo"],
      description:
        "Multiple diseases predictions based on symptoms given by user",
      logo: "",
      link: {
        label: "AI-Doc.com",
        href: "https://github.com/joel0x/AI-doc",
      },
    },
    {
      title: "Cold Mail generator",
      techStack: ["Hackathon", "javascript", "react.js","node.js"],
      description:
        "Developed a mail generation tool using OpenAI API, allowing users to generate mail in seconds by adding links and basic details.",
      logo: MonitoLogo,
      link: {
        label: "Cold-mail.dev",
        href: "https://cold-mail-generator.vercel.app",
      },
    },
    {
      title: "Virtual Estate",
      techStack: ["Hackathon", "javascript", "Solidity", "web3.js"],
      description:
        "A platform for buying virtual property, exploring the protocol for selling virtual landmarks.Secured 3rd place in a hackathon.",
      logo: "",
      link: {
        label: "github.com",
        href: "",
      },
    },
    {
      title: "Dating-site",
      techStack: [
        "Side Project",
        "React.js",
        "Vite",
        "MongoDB",
      ],
      description: "Built using React.js, featuring authentication and Tinder-like swiping as well as chat option.",
      logo: "",
      link: {
        label: "consultly.com",
        href: "https://github.com/joel0x/dating-site",
      },
    },
    {
      title: "Custodial wallet with Gas fees prediction",
      techStack: [
        "Hackathon",
        "React.js",
        "Vite",
        "MongoDB",
        "DeepAR"
      ],
      description: "This wallet helps you send and recieve crypto in timeline when gas fees is low",
      logo: "",
      link: {
        label: "",
        href: "https://github.com/utkarshkushi/revaHack2023",
      }
    },
      {
        title: "Video Script",
        techStack: [
          "Side Project",
          "Python",
          "LipNet" 
        ],
        description: "Used LipNet research paper to build a model which transcripts based on lip movement without any audio",
        logo: "",
        link: {
          label: "",
          href: "https://github.com/joel0x/Video-script",
        },
    }
  ],
} as const;
