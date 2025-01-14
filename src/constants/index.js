/* eslint-disable no-unused-vars */
import { Api, Audiofile, Bootstrap, CoinUp, Css, Dictionary, Framer, Github, GithubUserSearch, Html, Javascript, Typescript, LiveSite, Pomorodo, Quiz, React, ReactRounterDom, Sass, Tailwind, NextJs, Strapi, ReactHookForm, RestCountriesApi1, RestCountriesApi2, DictionaryTablet, DictionaryMobile, QuizQuestions, QuizTablet, QuizMobile, GithubTablet, GithubMobile, PomorodoSettings, PomorodoTablet, PomorodoMobile, AudiofilePages, AudiofileCheckout, AudiofileTablet, AudiofileMobile, CoinUp1, CoinUp2, CoinUp3, DevlinksLinks, DevlinksPreview, DevlinksProfile, DevlinksLogin, DevlinksRegister, ShadcnUi, Redux, Gitlab, Figma, DevlinksVideo } from "../assets";

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
    projectImages: [RestCountriesApi1, RestCountriesApi2],
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
    name: "Dictionary App with color theme switcher",
    description: "Access a wealth of definitions effortlessly with our sleek dictionary web app interface.",
    projectImages: [Dictionary, DictionaryTablet, DictionaryMobile],
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
    name: "Frontend Quiz app with color theme switcher",
    description: "Crafted an interactive Frontend Quiz App featuring a color theme switcher, enhancing user engagement while showcasing frontend development prowess",
    projectImages: [Quiz, QuizQuestions, QuizTablet, QuizMobile],
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
    projectImages: [GithubUserSearch, GithubTablet, GithubMobile],
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
    projectImages: [Audiofile, AudiofilePages, AudiofileCheckout, AudiofileTablet, AudiofileMobile],
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
    projectImages: [CoinUp, CoinUp1, CoinUp2, CoinUp3],
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
  },
  {
    name: "DevLinks",
    description: "DevLinks is a customizable link-sharing platform where users can easily manage and share their professional links, projects, and social profiles on a single page",
    projectImages: [DevlinksLinks, DevlinksPreview, DevlinksProfile, DevlinksLogin, DevlinksRegister],
    video: DevlinksVideo,
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
  }
];

const skills = [
  { imgSkill: Html, skill: "HTML", level: "Advanced", href: "https://developer.mozilla.org/fr/docs/Web/html" },
  { imgSkill: Css, skill: "CSS", level: "Advanced", href: "https://developer.mozilla.org/fr/docs/Web/css" },
  { imgSkill: Javascript, skill: "JavaScript", level: "Intermediate-Advanced", href: "https://developer.mozilla.org/fr/docs/Web/JavaScript" },
  { imgSkill: Typescript, skill: "Typescript", level: "Intermediate-Advanced", href: "https://typescriptlang.org" },
  { imgSkill: Sass, skill: "Sass", level: "Advanced", href: "https://sass-lang.com/" },
  { imgSkill: Bootstrap, skill: "Bootstrap", level: "Advanced", href: "https://getbootstrap.com/" },
  { imgSkill: Tailwind, skill: "Tailwind CSS", level: "Advanced", href: "https://tailwindcss.com/" },
  { imgSkill: Figma, skill: "UI/UX Design", level: "Intermediate", href: "https://figma.com/" },
  { imgSkill: React, skill: "ReactJS", level: "Advanced", href: "https://react.dev/" },
  { imgSkill: NextJs, skill: "NextJS", level: "Intermediate-Advanced", href: "https://nextjs.org/" },
  { imgSkill: ReactHookForm, skill: "React Hook-Form", level: "Intermediate-Advanced", href: "https://react-hook-form.com" },
  { imgSkill: Redux, skill: "Redux-Toolkit", level: "Intermediate-Advanced", href: "https://redux-toolkit.js.org/" },
  { imgSkill: Framer, skill: "Framer Motion", level: "Intermediate", href: "https://www.framer.com/motion/" },
  { imgSkill: ShadcnUi, skill: "Shadcn ui", level: "Intermediate-Advanced", href: "https://ui.shadcn.com/" },
  { imgSkill: Strapi, skill: "Strapi", level: "Intermediate-Advanced", href: "https://strapi.io/" },
  { imgSkill: Github, skill: "Git/Github", level: "Intermediate-Advanced", href: "https://github.com" },
  { imgSkill: Gitlab, skill: "Gitlab", level: "Intermediate-Advanced", href: "https://gitlab.com" },
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

export {
  links,
  linksMobile,
  projects,
  skills,
  textScroll,
  contacts
};