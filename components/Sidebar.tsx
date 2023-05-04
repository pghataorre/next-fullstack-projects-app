import Card from "./Card";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import SidebarLink from "./SidebarLink";
import { LinksStyling } from '../types/layoutTypes';

const links: LinksStyling[] = [
  { 
    label: "Home", 
    icon: "Grid", 
    link: "/home" 
  },
  {
    label: "Calendar",
    icon: "Calendar",
    link: "/calendar",
  },
  { 
    label: "Profile", 
    icon: "User", 
    link: "/profile" 
  },
  {
    label: "Settings",
    icon: "Settings",
    link: "/settings",
  },
];


const Sidebar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      <div className="w-full flex justify-center items-center">
        <Image src={logo} alt="Able logo" priority className="w-14" />
      </div>
        { 
          links.map((link: LinksStyling,) => <SidebarLink link={ link } key={`${link.link}${link.icon}`}/>)
        }
    </Card>
  );
};

export default Sidebar;
