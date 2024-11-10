import {
  Award,
  BadgeDollarSign,
  FolderOpenDot,
  Home,
  HomeIcon,
  LogOut,
  LucideIcon,
  User,
} from "lucide-react";

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

type DASHBOARD_NAV_LINK_PROPS = {
  name: string;
  icon: LucideIcon;
  path: string;
  active?: boolean;
};

export const DASHBOARD_NAV_LINK: DASHBOARD_NAV_LINK_PROPS[] = [
  {
    name: "Home",
    icon: HomeIcon,
    path: "/home",
    active: true,
  },
  {
    name: "Skills",
    icon: BadgeDollarSign,
    path: "/skills",
    active: false,
  },
  {
    name: "Project",
    icon: FolderOpenDot,
    path: "/projects",
    active: false,
  },
  {
    name: "Logout",
    icon: LogOut,
    path: "#",
    active: false,
  },
];

export const getIconURLByName = (name: string) => {
  return `https://devicon-website.vercel.app/api/${name}/original.svg`;
};
