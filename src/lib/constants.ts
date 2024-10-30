import { Award, FolderOpenDot, Home, LucideIcon, User } from "lucide-react"

type MenuLinkProps={
    text:string,
    icon:LucideIcon,
    href:string,
}
export const MenuLink:MenuLinkProps[]=[
    {
        text:"Home",
        href:"/",
        icon:Home,
    },
    {
        text:"Skills",
        href:"#skill",
        icon:Award,
    },
    {
        text:"Projects",
        href:"#project",
        icon:FolderOpenDot,
    },
    {
        text:"Contact",
        href:"#contact",
        icon:User,
    },
]


export const dummy=[
    {
        id:"sdfdff",
        name:"react",
        image:" https://devicon-website.vercel.app/api/react/original.svg"
    },
    {
        id:"sdfsdfdfsd",
        name:"react",
        image:" https://devicon-website.vercel.app/api/docker/original.svg"
    },
    {
        id:"sdfsdfvsdfsd",
        name:"react",
        image:" https://devicon-website.vercel.app/api/tailwindcss/original.svg"
    },
]