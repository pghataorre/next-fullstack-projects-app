import { FC } from "react"
import { IconProps, Icon } from "react-feather"

export type layoutProps = {
  children?: React.ReactNode;
  className?: string;
}

export type LinksStyling = {
  label: string;
  icon: iconKeys;
  link: string;
} 

export type LinkItems = {
  link: LinksStyling;
}

export type iconKeys = 'Settings' | 'User' | 'Grid' | 'Calendar';
