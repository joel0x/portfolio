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
    "Fourth-year Al-ML engineering student passionate about creating tech products. A self-taught full-stack developer with experience in building various projects, including Al and web3 applications.",
  personalWebsiteUrl: "https://jarocki.me",
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
    // {
    //   company: "Clevertech",
    //   link: "https://clevertech.biz",
    //   badges: ["Remote"],
    //   title: "Lead Android Developer → Full Stack Developer",
    //   logo: ClevertechLogo,
    //   start: "2015",
    //   end: "2021",
    //   description:
    //     "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    // },
    // {
    //   company: "Jojo Mobile",
    //   link: "https://bsgroup.eu/",
    //   badges: [],
    //   title: "Android Developer → Lead Android Developer",
    //   logo: JojoMobileLogo,
    //   start: "2012",
    //   end: "2015",
    //   description:
    //     "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    // },
    {
      company: "Fast KYC",
      badges:["Freelance"],
      work:"",
       title: "",
       logo: "",
      start: "Mar 2023",
      end: "Aug 2023",
      description: "Created a website simplifying the KYC process. Users can register once and use their public address with various organizations to avoid repeated KYC processes. Technologies used were Javascript and Web3.js successfully delivered the project to the client ahead of the deadline.",
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
    
    // {
    //   title: "Barepapers",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Generates beautiful wallpapers using random shapes and gradients",
    //   logo: BarepapersLogo,
    //   link: {
    //     label: "barepapers.com",
    //     href: "https://barepapers.com/",
    //   },
    // },
    // {
    //   title: "Year progress",
    //   techStack: ["Side Project", "TypeScript", "Next.js"],
    //   description: "Tracks current year progress and displays a countdown",
    //   logo: YearProgressLogo,
    //   link: {
    //     label: "getyearprogress.com",
    //     href: "https://getyearprogress.com/",
    //   },
    // },
    // {
    //   title: "Parabol",
    //   techStack: [
    //     "Full Stack Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "The Agile meeting co-pilot that delivers better meetings with less effort",
    //   logo: ParabolLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://parabol.co/",
    //   },
    // },
    // {
    //   title: "Evercast",
    //   techStack: [
    //     "Lead Frontend Developer",

    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "Creative collaboration platform that combines video conferencing and HD media streaming",
    //   logo: EvercastLogo,
    //   link: {
    //     label: "evercast.us",
    //     href: "https://www.evercast.us/",
    //   },
    // },
    // {
    //   title: "Mobile Vikings",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for leading virtual mobile operator in Poland",
    //   logo: MobileVikingsLogo,
    //   link: {
    //     label: "mobilevikings.pl",
    //     href: "https://mobilevikings.pl/",
    //   },
    // },
    // {
    //   title: "Howdy",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Howdy is a place for you to join communities you care about",
    //   logo: Howdy,
    //   link: {
    //     label: "play.google.com",
    //     href: "https://howdy.co/",
    //   },
    // },
    // {
    //   title: "Tastycloud",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for managing and displaying restaurant menus in kiosk mode",
    //   logo: TastyCloudLogo,
    //   link: {
    //     label: "tastycloud.fr",
    //     href: "https://www.tastycloud.fr/",
    //   },
    // },
    // {
    //   title: "Ambit",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with sharing your contact details",
    //   logo: AmbitLogo,
    // },
    // {
    //   title: "Bim",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with booking a table in a restaurants",
    //   logo: BimLogo,
    // },
    // {
    //   title: "Canal Digital GO",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Video streaming mobile application for Canal Digital subscribers",
    //   logo: CDGOLogo,
    // },
  ],
} as const;
