/* eslint-disable no-unused-vars */
import { Api, Audiofile, Bootstrap, CoinUp, Css, Dictionary, Framer, Github, GithubUserSearch, Html, Javascript, Typescript, LiveSite, Pomorodo, Quiz, React, ReactRounterDom, Sass, Tailwind, NextJs, Strapi, ReactHookForm, RestCountriesApi1, RestCountriesApi2, DictionaryTablet, DictionaryMobile, QuizQuestions, QuizTablet, QuizMobile, GithubTablet, GithubMobile, PomorodoSettings, PomorodoTablet, PomorodoMobile, AudiofilePages, AudiofileCheckout, AudiofileTablet, AudiofileMobile, CoinUp1, CoinUp2, CoinUp3, DevlinksLinks, DevlinksPreview, DevlinksProfile, DevlinksLogin, DevlinksRegister, ShadcnUi, Redux, Gitlab, Figma, DevlinksVideo, Vite, GymSpaceLogo } from "../assets";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
];


const linksMobile = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    name: "GymSpace",
    description: "Enterprise-grade gym management SaaS platform featuring comprehensive member management, intelligent scheduling system, subscription billing, real-time analytics dashboard, and multi-location support. Built for gym owners who need professional tools to scale their fitness business efficiently.",
    projectImages: [], // Add your GymSpace project images here
    isSpecial: true, // Flag to identify this as a special professional project
    category: "professional", // professional, intermediate, learning
    value: "high", // high, medium, low
    complexity: "enterprise", // enterprise, intermediate, basic
    technologies: [
      { name: "TypeScript", img: Typescript, href: "https://typescriptlang.org/", id: "typescript-gym" },
      { name: "React", img: React, href: "https://react.dev/", id: "react-gym" },
      { name: "Nextjs", img: NextJs, href: "https://nextjs.org", id: "nextjs-gym" },
      { name: "Tailwind", img: Tailwind, href: "https://tailwindcss.com/", id: "tailwind-gym" },
      { name: "Shadcn ui", img: ShadcnUi, href: "https://ui.shadcn.com/", id: "shadcn-gym" },
      { name: "Redux", img: Redux, href: "https://redux-toolkit.js.org/", id: "redux-gym" },
      { name: "React Hook-Form", img: ReactHookForm, href: "https://react-hook-form.com/", id: "rhf-gym" },
      { name: "Framer Motion", img: Framer, href: "https://www.framer.com/motion/", id: "framer-gym" },
      { name: "Rest API", img: Api, href: "", id: "api-gym" }
    ],
    links: [
      { name: "Github Repo", img: Github, href: "https://github.com/devllopeadam/gymspace-frontend" },
      { name: "Live Preview", img: LiveSite, href: "#" } // Update with actual live URL when deployed
    ]
  },
  {
    name: "E-Inventory",
    description: "E-Inventory is a comprehensive SaaS inventory management platform built with modern web technologies. This multi-tenant system features product management, sales tracking, warehouse management, real-time analytics with responsive dashboards, and role-based access control for enterprise-level inventory solutions.",
    projectImages: [], // Add your E-Inventory project images here
    isSpecial: true, // Flag to identify this as the special project
    category: "professional", // professional, intermediate, learning
    value: "high", // high, medium, low
    complexity: "enterprise", // enterprise, intermediate, basic
    technologies: [
      { name: "TypeScript", img: Typescript, href: "https://typescriptlang.org/", id: "typescript-einv" },
      { name: "React", img: React, href: "https://react.dev/", id: "react-einv" },
      { name: "Nextjs", img: NextJs, href: "https://nextjs.org", id: "nextjs-einv" },
      { name: "Tailwind", img: Tailwind, href: "https://tailwindcss.com/", id: "tailwind-einv" },
      { name: "Shadcn ui", img: ShadcnUi, href: "https://ui.shadcn.com/", id: "shadcn-einv" },
      { name: "Redux", img: Redux, href: "https://redux-toolkit.js.org/", id: "redux-einv" },
      { name: "React Hook-Form", img: ReactHookForm, href: "https://react-hook-form.com/", id: "rhf-einv" },
      { name: "Framer Motion", img: Framer, href: "https://www.framer.com/motion/", id: "framer-einv" },
      { name: "Rest API", img: Api, href: "", id: "api-einv" }
    ],
    links: [
      { name: "Github Repo", img: Github, href: "https://github.com/devllopeadam/E-inventory-app" },
      { name: "Live Preview", img: LiveSite, href: "https://e-inventory.tech/" }
    ]
  },
  {
    name: "DevLinks",
    description: "DevLinks is a customizable link-sharing platform where users can easily manage and share their professional links, projects, and social profiles on a single page",
    projectImages: [DevlinksLinks, DevlinksPreview, DevlinksProfile, DevlinksLogin, DevlinksRegister],
    video: DevlinksVideo,
    category: "professional", // professional, intermediate, learning
    value: "high", // high, medium, low
    complexity: "intermediate", // enterprise, intermediate, basic
    technologies: [
      { name: "CSS", img: Css, href: "https://developer.mozilla.org/fr/docs/Web/css", id: "css2" },
      { name: "Tailwind", img: Tailwind, href: "https://tailwindcss.com/", id: "tailwind2" },
      { name: "TypeScript", img: Typescript, href: "https://developer.mozilla.org/fr/docs/Web/JavaScript", id: "typescript" },
      { name: "React", img: React, href: "https://react.dev/", id: "react3" },
      { name: "Framer Motion", img: Framer, href: "https://www.framer.com/motion/", id: "framer3" },
      { name: "Nextjs", img: NextJs, href: "https://nextjs.org", id: "nextjs" },
      { name: "Strapi", img: Strapi, href: "https://strapi.io/", id: "strapi" },
      { name: "React Hook-Form", img: ReactHookForm, href: "https://react-hook-form.com/", id: "React Hook-Form" },
      { name: "Rest API", img: Api, href: "", id: "API3" }
    ],
    links: [
      { name: "Github Repo", img: Github, href: "https://github.com/devllopeadam/dev-links-frontend" },
      { name: "Live Preview", img: LiveSite, href: "https://dev-links-frontend-xi.vercel.app/" }
    ]
  },
  {
    name: "REST Countries API with color theme switcher",
    description: "Built a user-friendly country data app using the REST Countries V2 API to show detailed country info in an easy way.",
    projectImages: [RestCountriesApi1, RestCountriesApi2],
    category: "intermediate", // professional, intermediate, learning
    value: "medium", // high, medium, low
    complexity: "intermediate", // enterprise, intermediate, basic
    technologies: [
      { name: "HTML", img: Html, href: "https://developer.mozilla.org/fr/docs/Web/html", id: "html1" },
      { name: "Sass", img: Sass, href: "https://sass-lang.com/", id: "sass1" },
      { name: "Javascript", img: Javascript, href: "https://developer.mozilla.org/fr/docs/Web/JavaScript", id: "javascript1" },
      { name: "React", img: React, href: "https://react.dev/", id: "3" },
      { name: "React Router DOM", img: ReactRounterDom, href: "https://reactrouter.com/", id: "reactdom" },
      { name: "Framer Motion", img: Framer, href: "https://www.framer.com/motion/", id: "framer1" },
      { name: "Rest API", img: Api, href: "", id: "API1" }
    ],
    links: [
      { name: "Github Repo", img: Github, href: "https://github.com/devllopeadam/Rest-Countries-API" },
      { name: "Live Preview", img: LiveSite, href: "https://rest-countries-api-green-ten.vercel.app/" }
    ]
  },
  {
    name: "Audiophile e-commerce website",
    description: "Revolutionizing online audio shopping with React, Vite, and Tailwind CSS.Seamlessly immersive, just like a real store.",
    projectImages: [Audiofile, AudiofilePages, AudiofileCheckout, AudiofileTablet, AudiofileMobile],
    category: "intermediate", // professional, intermediate, learning
    value: "medium", // high, medium, low
    complexity: "intermediate", // enterprise, intermediate, basic
    technologies: [
      { name: "HTML", img: Html, href: "https://developer.mozilla.org/fr/docs/Web/html", id: "html7" },
      { name: "Javascript", img: Javascript, href: "https://developer.mozilla.org/fr/docs/Web/JavaScript", id: "javascript7" },
      { name: "React", img: React, href: "https://react.dev/", id: "react6" },
      { name: "Framer Motion", img: Framer, href: "https://www.framer.com/motion/", id: "framer6" },
      { name: "Tailwind", img: Tailwind, href: "https://tailwindcss.com/", id: "tailwind3" },
      { name: "React Router DOM", img: ReactRounterDom, href: "https://reactrouter.com/", id: "reactdom1" },
    ],
    links: [
      { name: "Github Repo", img: Github, href: "https://github.com/devllopeadam/e-commerce-app-master" },
      { name: "Live Preview", img: LiveSite, href: "https://e-commerce-app-master.vercel.app/" }
    ]
  },
  {
    name: "Dictionary App with color theme switcher",
    description: "Access a wealth of definitions effortlessly with our sleek dictionary web app interface.",
    projectImages: [Dictionary, DictionaryTablet, DictionaryMobile],
    category: "intermediate", // professional, intermediate, learning
    value: "medium", // high, medium, low
    complexity: "intermediate", // enterprise, intermediate, basic
    technologies: [
      { name: "HTML", img: Html, href: "https://developer.mozilla.org/fr/docs/Web/html", id: "html2" },
      { name: "CSS", img: Css, href: "https://developer.mozilla.org/fr/docs/Web/css", id: "css1" },
      { name: "Tailwind", img: Tailwind, href: "https://tailwindcss.com/", id: "tailwind1" },
      { name: "Javascript", img: Javascript, href: "https://developer.mozilla.org/fr/docs/Web/JavaScript", id: "javascript2" },
      { name: "React", img: React, href: "https://react.dev/", id: "react2" },
      { name: "Framer Motion", img: Framer, href: "https://www.framer.com/motion/", id: "framer2" },
      { name: "Rest API", img: Api, href: "", id: "API2" }
    ],
    links: [
      { name: "Github Repo", img: Github, href: "https://github.com/devllopeadam/dictionary-app-main" },
      { name: "Live Preview", img: LiveSite, href: "https://dictionary-app-main.vercel.app/" }
    ]
  },
  {
    name: "GitHub User search app color theme switcher",
    description: "Developed a dynamic GitHub User Profile Viewer leveraging the GitHub Users API, offering a seamless display of user profiles with comprehensive information",
    projectImages: [GithubUserSearch, GithubTablet, GithubMobile],
    category: "intermediate", // professional, intermediate, learning
    value: "medium", // high, medium, low
    complexity: "intermediate", // enterprise, intermediate, basic
    technologies: [
      { name: "HTML", img: Html, href: "https://developer.mozilla.org/fr/docs/Web/html", id: "html5" },
      { name: "Sass", img: Sass, href: "https://sass-lang.com/", id: "sass2" },
      { name: "Javascript", img: Javascript, href: "https://developer.mozilla.org/fr/docs/Web/JavaScript", id: "javascript5" },
      { name: "React", img: React, href: "https://react.dev/", id: "react4" },
      { name: "Framer Motion", img: Framer, href: "https://www.framer.com/motion/", id: "framer4" },
      { name: "Rest API", img: Api, href: "", id: "API2" }
    ],
    links: [
      { name: "Github Repo", img: Github, href: "https://github.com/devllopeadam/Github-user-search-" },
      { name: "Live Preview", img: LiveSite, href: "https://github-user-search-nc1h.vercel.app/" }
    ]
  },
  {
    name: "Pomodoro app",
    description: "an open-source project helps you harness the Pomodoro Technique to accomplish more in less time to supercharge your productivity!",
    projectImages: [Pomorodo, PomorodoSettings, PomorodoTablet, PomorodoMobile],
    category: "learning", // professional, intermediate, learning
    value: "low", // high, medium, low
    complexity: "basic", // enterprise, intermediate, basic
    technologies: [
      { name: "HTML", img: Html, href: "https://developer.mozilla.org/fr/docs/Web/html", id: "html6" },
      { name: "Javascript", img: Javascript, href: "https://developer.mozilla.org/fr/docs/Web/JavaScript", id: "javascript6" },
      { name: "React", img: React, href: "https://react.dev/", id: "react5" },
      { name: "Framer Motion", img: Framer, href: "https://www.framer.com/motion/", id: "framer5" },
      { name: "Sass", img: Sass, href: "https://sass-lang.com/", id: "sass3" },

    ],
    links: [
      { name: "Github Repo", img: Github, href: "https://github.com/devllopeadam/pomorodo-app" },
      { name: "Live Preview", img: LiveSite, href: "https://pomorodo-app.vercel.app/" }
    ]
  },
  {
    name: "Frontend Quiz app with color theme switcher",
    description: "Crafted an interactive Frontend Quiz App featuring a color theme switcher, enhancing user engagement while showcasing frontend development prowess",
    projectImages: [Quiz, QuizQuestions, QuizTablet, QuizMobile],
    category: "learning", // professional, intermediate, learning
    value: "low", // high, medium, low
    complexity: "basic", // enterprise, intermediate, basic
    technologies: [
      { name: "HTML", img: Html, href: "https://developer.mozilla.org/fr/docs/Web/html", id: "html4" },
      { name: "CSS", img: Css, href: "https://developer.mozilla.org/fr/docs/Web/css", id: "css3" },
      { name: "Javascript", img: Javascript, href: "https://developer.mozilla.org/fr/docs/Web/JavaScript", id: "javascript4" },
    ],
    links: [
      { name: "Github Repo", img: Github, href: "https://github.com/devllopeadam/Quiz-App" },
      { name: "Live Preview", img: LiveSite, href: "https://devllopeadam.github.io/Quiz-App//" }
    ]
  }
];

const skillsCategories = {
  frontend: [
    { imgSkill: Html, skill: "HTML5", level: "Advanced", href: "https://developer.mozilla.org/docs/Web/HTML" },
    { imgSkill: Css, skill: "CSS3", level: "Advanced", href: "https://developer.mozilla.org/docs/Web/CSS" },
    { imgSkill: Javascript, skill: "JavaScript", level: "Intermediate-Advanced", href: "https://developer.mozilla.org/docs/Web/JavaScript" },
    { imgSkill: Typescript, skill: "TypeScript", level: "Intermediate-Advanced", href: "https://typescriptlang.org" },
    { imgSkill: React, skill: "React", level: "Advanced", href: "https://react.dev/" },
    { imgSkill: NextJs, skill: "Next.js", level: "Intermediate-Advanced", href: "https://nextjs.org/" },
    { imgSkill: Sass, skill: "Sass/SCSS", level: "Advanced", href: "https://sass-lang.com/" },
    { imgSkill: Tailwind, skill: "Tailwind CSS", level: "Advanced", href: "https://tailwindcss.com/" },
    { imgSkill: Bootstrap, skill: "Bootstrap", level: "Advanced", href: "https://getbootstrap.com/" },
    { imgSkill: ReactHookForm, skill: "React Hook Form", level: "Intermediate-Advanced", href: "https://react-hook-form.com" },
    { imgSkill: Redux, skill: "Redux Toolkit", level: "Intermediate-Advanced", href: "https://redux-toolkit.js.org/" },
    { imgSkill: Framer, skill: "Framer Motion", level: "Intermediate", href: "https://www.framer.com/motion/" },
    { imgSkill: ShadcnUi, skill: "Shadcn/ui", level: "Intermediate-Advanced", href: "https://ui.shadcn.com/" },
    { imgSkill: Vite, skill: "Vite", level: "Advanced", href: "https://vitejs.dev/" },
  ],
  backend: [
    { imgSkill: NextJs, skill: "Next.js API Routes", level: "Intermediate-Advanced", href: "https://nextjs.org/docs/api-routes/introduction" },
    { imgSkill: Strapi, skill: "Strapi CMS", level: "Intermediate-Advanced", href: "https://strapi.io/" },
    { imgSkill: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", skill: "Supabase", level: "Intermediate", href: "https://supabase.com/" },
    { imgSkill: Api, skill: "REST APIs", level: "Intermediate-Advanced", href: "https://restfulapi.net/" },
    { imgSkill: Javascript, skill: "Node.js", level: "Intermediate", href: "https://nodejs.org/" },
    { imgSkill: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", skill: "Express.js", level: "Intermediate", href: "https://expressjs.com/" },
    { imgSkill: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/laravel/laravel-original.svg", skill: "Laravel", level: "Intermediate", href: "https://laravel.com/" },
    { imgSkill: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", skill: "MongoDB", level: "Intermediate", href: "https://mongodb.com/" },
    { imgSkill: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", skill: "MySQL", level: "Intermediate", href: "https://mysql.com/" },
    { imgSkill: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", skill: "PostgreSQL", level: "Intermediate", href: "https://postgresql.org/" },
    { imgSkill: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", skill: "Prisma ORM", level: "Intermediate", href: "https://prisma.io/" },
  ],
  tools: [
    { imgSkill: Github, skill: "Git & GitHub", level: "Intermediate-Advanced", href: "https://github.com" },
    { imgSkill: Gitlab, skill: "GitLab", level: "Intermediate-Advanced", href: "https://gitlab.com" },
    { imgSkill: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg", skill: "GitHub Actions", level: "Intermediate", href: "https://github.com/features/actions" },
    { imgSkill: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", skill: "GitLab CI/CD", level: "Intermediate", href: "https://docs.gitlab.com/ee/ci/" },
    { imgSkill: Figma, skill: "UI/UX Design", level: "Intermediate", href: "https://figma.com/" },
    { imgSkill: Vite, skill: "Build Tools", level: "Advanced", href: "https://vitejs.dev/" },
    { imgSkill: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", skill: "Docker", level: "Intermediate", href: "https://docker.com/" },
    { imgSkill: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", skill: "Linux/VM Setup", level: "Intermediate", href: "https://linux.org/" },
    { imgSkill: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", skill: "Nginx", level: "Intermediate", href: "https://nginx.org/" },
    { imgSkill: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png", skill: "Vercel", level: "Advanced", href: "https://vercel.com/" },
    { imgSkill: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg", skill: "Netlify", level: "Advanced", href: "https://netlify.com/" },
    { imgSkill: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", skill: "AWS", level: "Basic-Intermediate", href: "https://aws.amazon.com/" },
    { imgSkill: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg", skill: "DigitalOcean", level: "Intermediate", href: "https://digitalocean.com/" },
    { imgSkill: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", skill: "Firebase", level: "Intermediate", href: "https://firebase.google.com/" },
    { imgSkill: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg", skill: "Heroku", level: "Intermediate", href: "https://heroku.com/" },
  ]
};

// Keep the old skills array for backward compatibility if needed elsewhere
const skills = [
  ...skillsCategories.frontend,
  ...skillsCategories.backend,
  ...skillsCategories.tools,
];

const textScroll = [
  "Developer",
  "·",
  "JavaScript",
  "·",
  "Frontend",
  "·",
  "TypeScript",
  "·",
  "ReactJS",
  "·",
  "NextJS",
  "·"
];

const contacts = [
  { title: "Email", subtitle: "jeniahadam@gmail.com", buttonText: "Send me an Email", href: "mailto:jeniahadam@gmail.com", type: "simple" },
  { title: "Phone number", subtitle: "+212 695 26-64-08", buttonText: "Copy number", href: "+212 695 26-64-08", type: "copy" },
  { title: "LinkedIn", subtitle: "in/adam-jeniah", buttonText: "Visit my LinkedIn", href: "https://www.linkedin.com/in/adam-jeniah/", type: "simple" },
];


const testimonials = [
  {
    id: 1,
    name: "Hicham Achkif",
    position: "Owner & Founder",
    company: "Sumatra IT Services",
    companyLogo:
      "https://media.licdn.com/dms/image/v2/C4D0BAQHrZuchbacs0w/company-logo_200_200/company-logo_200_200/0/1651416968764?e=2147483647&v=beta&t=1VKl3sCqGHQWsw6gc-sZTJqGNpSCTOOxgiE3F_QueT8",
    profileImage:
      "https://media.licdn.com/dms/image/v2/D4D03AQHDXql3k63rRg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1640784822391?e=1756944000&v=beta&t=MVdcfZGVZuu5zhkcT8kEU9tgQpMKUghkEl3_8WanpfY",
    review:
      "Adam delivered exceptional results for our enterprise clients. His problem-solving approach and clean UI/UX design helped us increase client satisfaction by 40%. The scalable solutions he built continue to serve our growing business needs perfectly.",
    rating: 5,
    project: "Enterprise SaaS Platform",
    linkedin: "https://www.linkedin.com/in/hicham-achkif-32789716/",
    companyUrl: "https://www.linkedin.com/company/sumatra-it-services/",
    gradient: "from-blue-600 to-purple-600",
    bgGradient: "from-blue-50 to-purple-50",
  },
  {
    id: 2,
    name: "Joseph Henry Nkeng ",
    position: "Owner & CEO",
    company: "Valhko",
    companyLogo:
      "https://media.licdn.com/dms/image/v2/D4E0BAQFjr-5T2OuIMA/company-logo_200_200/company-logo_200_200/0/1686154927647/valhko_logo?e=1756944000&v=beta&t=BuFL4XR9PRvgMfzVHhRl0Gtuv2U2YO4RLI-7avO8ywk",
    profileImage:
      "https://media.licdn.com/dms/image/v2/C4D03AQHmhIk4j4rYRA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1582977759934?e=1756944000&v=beta&t=RRsiECWMBq_o6Q9RihHz29TVJS98DW_X0q2aCkNv6kc",
    review:
      "Working with Adam was a game-changer for our startup. He transformed our complex requirements into intuitive, user-friendly interfaces. His attention to detail and modern development practices helped us launch ahead of schedule with zero technical debt.",
    rating: 5,
    project: "Startup MVP Development",
    linkedin: "https://www.linkedin.com/in/jhnkeng/",
    companyUrl: "https://www.linkedin.com/company/79564814/",
    gradient: "from-emerald-600 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    id: 3,
    name: "Mohammed Chairi Mahjor",
    position: "Owner & Software Engineer",
    company: "Flex Business",
    companyLogo:
      "https://media.licdn.com/dms/image/v2/C4E0BAQETBH8-BA7pfQ/company-logo_200_200/company-logo_200_200/0/1661381457416?e=2147483647&v=beta&t=egGog_55WamslIvFha3eZ5Yv1jsI1KIDoGhM0lzN3Jc",
    profileImage:
      "https://media.licdn.com/dms/image/v2/D4E03AQG5cJ-SWrFzBw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1703069121644?e=2147483647&v=beta&t=GKDI-6UsW1hbV8lHQRYCyDpL8iBN3emw706Hr33ZwFI",
    review:
      "Adam's technical expertise is outstanding. He not only delivered a robust business management system but also provided innovative solutions to complex challenges we hadn't even considered. His clean code architecture and responsive design exceeded all expectations.",
    rating: 5,
    project: "Business Management System",
    linkedin: "https://www.linkedin.com/in/mohammed-chairi-mahjor-99687250/",
    companyUrl: "https://www.linkedin.com/company/fl-x/",
    gradient: "from-orange-600 to-red-600",
    bgGradient: "from-orange-50 to-red-50",
  },
];

export {
  links,
  linksMobile,
  projects,
  skills,
  skillsCategories,
  textScroll,
  contacts,
  testimonials
};