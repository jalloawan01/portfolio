// Updated portfolio configuration for Jalal Ahmad
import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Jalal",
  lastName: "Ahmad",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Working at Cognisons | Flutter • AI/ML Developer",
  avatar: "/images/avatar.jpeg",
  location: "Islamabad, Islāmābād, Pakistan",
  languages: ["English", "Urdu"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about Flutter development, AI/ML, product strategy, startup engineering, and modern tech stack practices.
    </>
  ),
};

const social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jalalahmad01",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:jalloawan2001@gmail.com",
  },
  {
    name: "Upwork",
    icon: "upwork",
    link: "https://www.upwork.com/freelancers/~01caea48a0ec6cc26f",
  },
  {
    name: "Fiverr",
    icon: "fiverr",
    link: "https://www.fiverr.com/s/dDkBxqG",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Flutter • AI/ML Developer </>,
  subline: (
    <>
      I'm Jalal Ahmad, a Software Engineer with a hands-on background in <InlineCode>Flutter</InlineCode> and <InlineCode>AI/ML</InlineCode>. I specialize in building cross-platform mobile applications, web solutions, and AI-powered features. Currently working at Cognisons, I help deliver end-to-end product engineering solutions for startups and SMEs.
      <br /> I work with Flutter, React/Next.js, Node.js, Python, TensorFlow, PyTorch, and Cloud/DevOps on AWS/Azure/GCP.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/jalalahmad01/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a Software Engineer with a hands-on background in Flutter and AI/ML. Currently working at Cognisons, I specialize in building cross-platform mobile applications, web solutions, and AI-powered features. I help deliver end-to-end product engineering solutions for startups and SMEs.
        <br /><br />
        I work with Flutter, React/Next.js, Node.js, Python, TensorFlow, PyTorch, and Cloud/DevOps on AWS/Azure/GCP. I focus on building MVPs, modernizing tech stacks, and delivering scalable solutions.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Cognisons",
        timeframe: "September 2025 - Present (3 months)",
        role: "Software Engineer",
        achievements: [
          <>Working on end-to-end product engineering, web, mobile, AI/ML, cloud, and data solutions.</>,
          <>Building MVPs and modernizing tech stacks for startups and SMEs.</>,
          <>Developing cross-platform mobile applications using Flutter and AI-powered features.</>,
          <>Working with React/Next.js, Node.js, Python, TensorFlow, PyTorch, and Cloud/DevOps on AWS/Azure/GCP.</>,
        ],
        images: [],
      },
      {
        company: "Artificial Intelligence Community of Pakistan",
        timeframe: "January 2024 - September 2025 (1 year 9 months)",
        role: "AI Intern",
        achievements: [
          <>Gained hands-on experience in AI/ML development and machine learning architecture.</>,
          <>Worked on AI model implementation and performance optimization.</>,
          <>Collaborated with AI teams on cutting-edge machine learning projects.</>,
        ],
        images: [],
      },
      {
        company: "University of Engineering and Technology Mardan",
        timeframe: "November 2021 - September 2025 (3 years 11 months)",
        role: "Student",
        achievements: [
          <>Pursued Bachelor of Engineering in Computer Software Engineering.</>,
          <>Focused on software engineering, AI/ML, and modern development practices.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "University of Engineering and Technology, Mardan",
        description: <>Bachelor of Engineering - BE, Computer Software Engineering | September 2021 - June 2025</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Product Development",
        description: <>Product Strategy, MVP Development, Business-to-Business (B2B), Cross-platform Solutions</>,
      },
      {
        title: "Mobile Development",
        description: <>Flutter, Dart, iOS, Android, Cross-platform Development</>,
      },
      {
        title: "AI/ML & Data",
        description: <>TensorFlow, PyTorch, Generative AI, Data Engineering, AI Copilots & Analytics</>,
      },
      {
        title: "Web & Backend",
        description: <>React/Next.js, Node.js, Python, REST APIs, GraphQL, Firebase</>,
      },
      {
        title: "Cloud & DevOps",
        description: <>AWS, Azure, GCP, Kubernetes, Docker, Cloud/DevOps</>,
      },
      {
        title: "Product Engineering",
        description: <>SaaS/Platform Engineering, MVP Development, Product Engineering, End-to-end Solutions</>,
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about Flutter development, AI/ML, product strategy, and startup engineering...",
  description: `Read what ${person.name} has been working on in tech entrepreneurship and product development`,
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Projects and solutions built by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "Photo Gallery",
  description: `Snapshots from ${person.name}'s journey`,
  images: [
    {
      src: "/images/gallery/9469963_4174812.jpg",
      alt: "Flutter Development Work",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/9926578_4326821.jpg",
      alt: "Mobile App Development",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/Ai_chat_bot.jpg",
      alt: "AI Chat Bot Application",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/Android_App.jpeg",
      alt: "Android App Development",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/habitapp.png",
      alt: "Habit Tracking App",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "Flutter Project Showcase",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "Mobile App UI Design",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/iOS_APP.jpeg",
      alt: "iOS App Development",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/iOS_App.png",
      alt: "iOS Application",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/WhatsApp Image 2024-08-28 at 21.35.17.jpeg",
      alt: "Flutter Development Work",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/WhatsApp Image 2024-08-28 at 21.35.18.jpeg",
      alt: "Mobile App Development",
      orientation: "horizontal"
    },
    {
      src: "/images/gallery/WhatsApp Image 2024-08-28 at 21.35.19.jpeg",
      alt: "Flutter Project",
      orientation: "horizontal"
    },
    {
      src: "/images/projects/project-06/1.png",
      alt: "Nexus Store - E-commerce Platform",
      orientation: "horizontal"
    },
    {
      src: "/images/projects/project-06/2.png",
      alt: "Nexus Store - Customer Application",
      orientation: "horizontal"
    },
    {
      src: "/images/projects/project-06/3.png",
      alt: "Nexus Store - Admin Management",
      orientation: "horizontal"
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };