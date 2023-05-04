'use client';

import Link from "next/link";
import { Settings, User, Grid, Calendar} from "react-feather";
import { usePathname } from "next/navigation";
import { LinkItems } from "../types/layoutTypes";

const icons = {Settings, User, Grid, Calendar};
const SidebarLink = ({link: {link, icon, label} }: LinkItems, key: string) => {
  const pathname = usePathname();
  let isActive = false;

  if (pathname === link) {
    isActive = true
  }

  const Icon = icons[icon];

  return (
    <Link href={link} key={key}>
      <Icon 
        size={40} 
        className={`stroke-gray-400 hover:stroke-violet-600 transition duration-200 ease-in-out ${isActive && 'stroke-violet-600'}`}
      />
      {label}
    </Link>
  )
}

export default SidebarLink;
