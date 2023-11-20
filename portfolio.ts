import emoji from 'react-easy-emoji';
import {
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'ComboGang',
  title: "Hi all, I'm ComboGang",
  description:
    "I'm Full-Stack developer using a variety of languages to complete my projects",
};

export const openSource = {
  githubUserName: 'combogangreal',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  github: 'https://github.com/combogangreal',
  instagram: 'https://www.instagram.com/combogangdev/',
  twitter: 'https://twitter.com/ComboGangDev',
  discord: 'https://discord.gg/uze96ZDw'
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'Full-Stack developer who is passionate about building great & quality products',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Build RESTful APIs using Python & Flask & Jinja2'),
        emoji('⚡ Building responsive mobile applications using Kotlin'),
        emoji('⚡ Building responsive desktop applications using Rust'),
        emoji('⚡ Building advanced games using C++ & OpenGL'),
        emoji('⚡ Building multi-purpose discord bots using Python & Discord.py'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'TypeScript',
          iconifyTag: 'vscode-icons:file-type-typescript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
        {
          skillName: 'Rust',
          iconifyTag: 'logos:rust',
        },
        {
          skillName: 'Go',
          iconifyTag: 'logos:go',
        },
        {
          skillName: 'Java',
          iconifyTag: 'logos:java',
        },
        {
          skillName: 'Kotlin',
          iconifyTag: 'logos:kotlin',
        },
        {
          skillName: 'C',
          iconifyTag: 'vscode-icons:file-type-c',
        },
        {
          skillName: 'CPP',
          iconifyTag: 'vscode-icons:file-type-cpp',
        },
        {
          skillName: 'OpenCV',
          iconifyTag: 'logos:opencv',
        },
        {
          skillName: 'OpenGL',
          iconifyTag: 'logos:opengl',
        },
        {
          skillName: 'Jinja',
          iconifyTag: 'vscode-icons:file-type-jinja',
        },
        {
          skillName: 'PhP',
          iconifyTag: 'logos:php',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
        {
          skillName: 'Vercel',
          iconifyTag: 'logos:vercel',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Backend', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Frontend/UI/UX',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];


export const projects: ProjectType[] = [
  {
    name: 'Donut.rs',
    desc: 'A donut.c clone in rust',
    github: 'https://github.com/combogangreal/Donut.rs',
  },
  {
    name: 'Port-Sniffer',
    desc: 'A port scanner sniffer in rust',
    github: 'https://github.com/combogangreal/Port-Sniffer',
  },
  {
    name: 'Combo-Bot',
    desc: 'A custom discord bot with buy/order system',
    github: 'https://github.com/combogangreal/Bot',
  },
  {
    name: 'Sample-Bot',
    desc: 'A advanced discord bot template with a sqlite3 database, cog loading, sample moderation cog, and slash commands',
    github: 'https://github.com/combogangreal/Example-Bot/tree/main'
  }
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Combo Gang',
  description:
    'A passionate Full Stack Back & Front end Developer with 4 years of experience',
  author: 'Combo Gang',
  image: './assests/images.jfif',
  url: 'combgang.com',
  keywords: [
    'Combo',
    'Combo Gang',
    '@combogangdev',
    'combogangreal',
    'Portfolio',
    'Combo Portfolio ',
    'Combo Gang Portfolio',
  ],
};