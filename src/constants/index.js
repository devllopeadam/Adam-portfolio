/* eslint-disable no-unused-vars */
import { Api, Bootstrap, CoinUp, Css, Dictionary, Framer, Github, GithubUserSearch, Html, Javascript, LiveSite, Quiz, React, ReactRounterDom, RestCountriesApi, Sass, Tailwind, Vite } from "../assets";

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
  { imgSkill: Sass, skill: "Sass", level: "Advanced", href: "https://sass-lang.com/" },
  { imgSkill: Bootstrap, skill: "Bootstrap", level: "Advanced", href: "https://getbootstrap.com/" },
  { imgSkill: Tailwind, skill: "Tailwind", level: "Intermediate-Advanced", href: "https://tailwindcss.com/" },
  { imgSkill: Framer, skill: "Framer Motion", level: "Beginner", href: "https://www.framer.com/motion/" },
  { imgSkill: React, skill: "ReactJS", level: "Intermediate-Advanced", href: "https://react.dev/" },
  { imgSkill: Vite, skill: "Vite", level: "Advanced", href: "https://vitejs.dev//" },
  { imgSkill: Github, skill: "Git/Github", level: "Intermediate-Advanced", href: "https://github.com" },
];
export {
  links,
  linksMobile,
  projects,
  skills
};