import { ReactNode } from 'react';

export interface ISidebarItem {
  title: string;
  icon: ReactNode;
  path?: string;
  action?: () => void;
  children?: ISidebarItem[];
}

export interface ISidebarData {
  title: string;
  line: boolean;
  items: ISidebarItem[];
}

export interface ISidebar {
  isSmallDevice: boolean;
};