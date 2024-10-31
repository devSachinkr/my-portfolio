import { Award, FolderOpenDot, Home, LucideIcon, User } from "lucide-react";

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


