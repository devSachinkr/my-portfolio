import { Award, BadgeDollarSign, FolderOpenDot, Home, HomeIcon, LucideIcon, User } from "lucide-react";

type MenuLinkProps = {
  text: string;
  icon: LucideIcon;
  href: string;
};
export const MenuLink: MenuLinkProps[] = [
  {
    text: "Home",
    href: "/",
    icon: Home,
  },
  {
    text: "Skills",
    href: "#skill",
    icon: Award,
  },
  {
    text: "Projects",
    href: "#project",
    icon: FolderOpenDot,
  },
  {
    text: "Contact",
    href: "#contact",
    icon: User,
  },
];

export const dummy = [
  {
    id: "sdfdff",
    name: "react",
    image: " https://devicon-website.vercel.app/api/react/original.svg",
  },
  {
    id: "sdfsdfdfsd",
    name: "react",
    image: " https://devicon-website.vercel.app/api/docker/original.svg",
  },
  {
    id: "sdfsdfvsdfsd",
    name: "react",
    image: " https://devicon-website.vercel.app/api/figma/original.svg",
  },
];

type SkillAnimateProps = {
  iconName: string;
  alt: string;
  rotate: number;
};

export const SKILL_ANIMATE: SkillAnimateProps[] = [
  {
    iconName: "figma",
    alt: "Figma",
    rotate: 45,
  },
  {
    iconName: "docker",
    alt: "Docker",
    rotate: 90,
  },
  {
    iconName: "vscode",
    alt: "Vscode",
    rotate: 135,
  },
  {
    iconName: "nodejs",
    alt: "Node Js",
    rotate: 180,
  },
  {
    iconName: "angularjs",
    alt: "Angular Js",
    rotate: 225,
  },
  {
    iconName: "mongodb",
    alt: "Mongo DB",
    rotate: 270,
  },
  {
    iconName: "redux",
    alt: "Redux",
    rotate: 310,
  },
  {
    iconName: "react",
    alt: "React",
    rotate: 360,
  },
];


export const dummyProjectData=[
  {
    name:"Devops",
    desc:"xyzsddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
    link:"#",
    image:"https://images.unsplash.com/photo-1516410529446-2c777cb7366d?ixlib=rb-1.2.1&w=1000&q=80"

  },
  {
    name:"Devops",
    desc:"xyz",
    link:"#",
    image:"https://images.unsplash.com/photo-1516410529446-2c777cb7366d?ixlib=rb-1.2.1&w=1000&q=80"

  },
  {
    name:"Devops",
    desc:"xyz",
    link:"#",
    image:"https://images.unsplash.com/photo-1516410529446-2c777cb7366d?ixlib=rb-1.2.1&w=1000&q=80"

  },
  {
    name:"Devops",
    desc:"xyz",
    link:"#",
    image:"https://images.unsplash.com/photo-1516410529446-2c777cb7366d?ixlib=rb-1.2.1&w=1000&q=80"

  },
 
]

type DASHBOARD_NAV_LINK_PROPS={
   name:string;
   icon:LucideIcon;
   path:string;
   active?:boolean
}

export const DASHBOARD_NAV_LINK:DASHBOARD_NAV_LINK_PROPS[]=[
  {
    name:"Home",
    icon:HomeIcon,
    path:'/home',
    active:true
  },
  {
    name:"Skills",
    icon:BadgeDollarSign,
    path:'/skills',
    active:false
  },
  {
    name:"Project",
    icon:FolderOpenDot,
    path:'/projects',
    active:false
  },
]

export const getIconURLByName=(name:string)=>{
   return `https://devicon-website.vercel.app/api/${name}/original.svg`
}