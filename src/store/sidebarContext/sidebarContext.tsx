"use client";

import React, { createContext } from 'react';

const SidebarContext = createContext({
  isOpen: true,
  toggleSidebar: () => {},
});

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };