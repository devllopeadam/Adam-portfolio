/* eslint-disable no-unused-vars */
import { Api, Audiofile, Bootstrap, CoinUp, Css, Dictionary, Framer, Github, GithubUserSearch, Html, Javascript, Typescript, LiveSite, Pomorodo, Quiz, React, ReactRounterDom, RestCountriesApi, Sass, Tailwind, NextJs } from "../assets";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
];


const linksMobile = [
  { label: "Projects", href: "#projects" },
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    name: "REST Countries API with color theme switcher",
    description: "Built a user-friendly country data app using the REST Countries V2 API to show detailed country info in an easy way.",
    imgProjet: RestCountriesApi,
    technologies: [
      { name: "HTML", img: Html, href: "https://developer.mozilla.org/fr/docs/Web/html", id: "html1" },
      { name: "Sass", img: Sass, href: "https://sass-lang.com/", id: "sass1" },
      { name: "Javascript", img: Javascript, href: "https://developer.mozilla.org/fr/docs/Web/JavaScript", id: "javascript1" },
      { name: "React", img: React, href: "https://react.dev/", id: "3" },
      { name: "React Router DOM", img: ReactRounterDom, href: "https://reactrouter.com/", id: "reactdom" },
      { name: "Framer Motion", img: Framer, href: "https://www.framer.com/motion/", id: "framer1" },
      { name: "API", img: Api, href: "", id: "API1" }
    ],
    links: [
      { name: "Github Repo", img: Github, href: "https://github.com/devllopeadam/Rest-Countries-API" },
      { name: "Live Preview", img: LiveSite, href: "https://rest-countries-api-green-ten.vercel.app/" }
    ]
  },
  {
    name: "Dictionary App with color theme switcher",
    description: "Access a wealth of definitions effortlessly with our sleek dictionary web app interface.",
    imgProjet: Dictionary,
    technologies: [
      { name: "HTML", img: Html, href: "https://developer.mozilla.org/fr/docs/Web/html", id: "html2" },
      { name: "CSS", img: Css, href: "https://developer.mozilla.org/fr/docs/Web/css", id: "css1" },
      { name: "Tailwind", img: Tailwind, href: "https://tailwindcss.com/", id: "tailwind1" },
      { name: "Javascript", img: Javascript, href: "https://developer.mozilla.org/fr/docs/Web/JavaScript", id: "javascript2" },
      { name: "React", img: React, href: "https://react.dev/", id: "react2" },
      { name: "Framer Motion", img: Framer, href: "https://www.framer.com/motion/", id: "framer2" },
      { name: "API", img: Api, href: "", id: "API2" }
    ],
    links: [
      { name: "Github Repo", img: Github, href: "https://github.com/devllopeadam/dictionary-app-main" },
      { name: "Live Preview", img: LiveSite, href: "https://dictionary-app-main.vercel.app/" }
    ]
  },
  {
    name: "Frontend Quiz app with color theme switcher",
    description: "Crafted an interactive Frontend Quiz App featuring a color theme switcher, enhancing user engagement while showcasing frontend development prowess",
    imgProjet: Quiz,
    technologies: [
      { name: "HTML", img: Html, href: "https://developer.mozilla.org/fr/docs/Web/html", id: "html4" },
      { name: "CSS", img: Css, href: "https://developer.mozilla.org/fr/docs/Web/css", id: "css3" },
      { name: "Javascript", img: Javascript, href: "https://developer.mozilla.org/fr/docs/Web/JavaScript", id: "javascript4" },
    ],
    links: [
      { name: "Github Repo", img: Github, href: "https://github.com/devllopeadam/Quiz-App" },
      { name: "Live Preview", img: LiveSite, href: "https://devllopeadam.github.io/Quiz-App//" }
    ]
  },
  {
    name: "GitHub User search app color theme switcher",
    description: "Developed a dynamic GitHub User Profile Viewer leveraging the GitHub Users API, offering a seamless display of user profiles with comprehensive information",
    imgProjet: GithubUserSearch,
    technologies: [
      { name: "HTML", img: Html, href: "https://developer.mozilla.org/fr/docs/Web/html", id: "html5" },
      { name: "Sass", img: Sass, href: "https://sass-lang.com/", id: "sass2" },
      { name: "Javascript", img: Javascript, href: "https://developer.mozilla.org/fr/docs/Web/JavaScript", id: "javascript5" },
      { name: "React", img: React, href: "https://react.dev/", id: "react4" },
      { name: "Framer Motion", img: Framer, href: "https://www.framer.com/motion/", id: "framer4" },
      { name: "API", img: Api, href: "", id: "API2" }
    ],
    links: [
      { name: "Github Repo", img: Github, href: "https://github.com/devllopeadam/Github-user-search-" },
      { name: "Live Preview", img: LiveSite, href: "https://github-user-search-nc1h.vercel.app/" }
    ]
  },
  {
    name: "Pomodoro app",
    description: "an open-source project helps you harness the Pomodoro Technique to accomplish more in less time to supercharge your productivity!",
    imgProjet: Pomorodo,
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
    name: "Audiophile e-commerce website",
    description: "Revolutionizing online audio shopping with React, Vite, and Tailwind CSS.Seamlessly immersive, just like a real store.",
    imgProjet: Audiofile,
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
    name: "CoinUp",
    description: "CoinUp: Your go-to Crypto Wallet SaaS Website, empowering businesses to enter the crypto wallet market and elevate user experience.",
    imgProjet: CoinUp,
    type: "single",
    technologies: [
      { name: "HTML", img: Html, href: "https://developer.mozilla.org/fr/docs/Web/html", id: "html3" },
      { name: "CSS", img: Css, href: "https://developer.mozilla.org/fr/docs/Web/css", id: "css2" },
      { name: "Tailwind", img: Tailwind, href: "https://tailwindcss.com/", id: "tailwind2" },
      { name: "Javascript", img: Javascript, href: "https://developer.mozilla.org/fr/docs/Web/JavaScript", id: "javascript3" },
      { name: "React", img: React, href: "https://react.dev/", id: "react3" },
      { name: "Framer Motion", img: Framer, href: "https://www.framer.com/motion/", id: "framer3" }
    ],
    links: [
      { name: "Github Repo", img: Github, href: "https://github.com/devllopeadam/coin-up" },
      { name: "Live Preview", img: LiveSite, href: "https://coin-up-devllopeadams-projects.vercel.app/" }
    ]
  }
];

const skills = [
  { imgSkill: Html, skill: "HTML", level: "Advanced", href: "https://developer.mozilla.org/fr/docs/Web/html" },
  { imgSkill: Css, skill: "CSS", level: "Advanced", href: "https://developer.mozilla.org/fr/docs/Web/css" },
  { imgSkill: Javascript, skill: "JavaScript", level: "Intermediate-Advanced", href: "https://developer.mozilla.org/fr/docs/Web/JavaScript" },
  { imgSkill: Typescript, skill: "Typescript", level: "Intermediate-Advanced", href: "https://typescriptlang.org" },
  { imgSkill: Sass, skill: "Sass", level: "Advanced", href: "https://sass-lang.com/" },
  { imgSkill: Bootstrap, skill: "Bootstrap", level: "Advanced", href: "https://getbootstrap.com/" },
  { imgSkill: Tailwind, skill: "Tailwind", level: "Intermediate-Advanced", href: "https://tailwindcss.com/" },
  { imgSkill: Framer, skill: "Framer Motion", level: "Beginner", href: "https://www.framer.com/motion/" },
  { imgSkill: React, skill: "ReactJS", level: "Intermediate-Advanced", href: "https://react.dev/" },
  { imgSkill: NextJs, skill: "NextJS", level: "Intermediate-Advanced", href: "https://nextjs.org/" },
  { imgSkill: Github, skill: "Git/Github", level: "Intermediate-Advanced", href: "https://github.com" },
];

const textScroll = [
  "Developer",
  "·",
  "JavaScript",
  "·",
  "Frontend",
  "·",
  "ReactJS",
  "·",
  "NextJS",
  "."
];

const contacts = [
  { title: "Email", subtitle: "jeniahadam@gmail.com", buttonText: "Send me an Email", href: "mailto:jeniahadam@gmail.com", type: "simple" },
  { title: "Phone number", subtitle: "+212 695 26-64-08", buttonText: "Copy number", href: "+212 695 26-64-08", type: "copy" },
  { title: "LinkedIn", subtitle: "in/adam-jeniah", buttonText: "Visit my LinkedIn", href: "https://www.linkedin.com/in/adam-jeniah/", type: "simple" },
];

export {
  links,
  linksMobile,
  projects,
  skills,
  textScroll,
  contacts
};