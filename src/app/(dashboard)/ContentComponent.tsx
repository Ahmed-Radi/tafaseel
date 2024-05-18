"use client";

import Sidebar from '@/components/sidebar/sidebar'
import { SidebarContext } from '@/store/sidebarContext/sidebarContext';
import { Container } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useMediaQuery } from "@uidotdev/usehooks";
import { RxHamburgerMenu } from 'react-icons/rx';

function ContentComponent({ children }: { children: React.ReactNode }) {
  const { isOpen, toggleSidebar } = useContext(SidebarContext);
  const isSmallDevice: boolean = useMediaQuery("only screen and (max-width : 1199px)");

  return (
    <div className={`layout-container${isOpen ? "" : " close"}`}>
      <Container maxW={"container"}>
        {isSmallDevice ? <button onClick={toggleSidebar} className="sidebar-toggle"><RxHamburgerMenu /></button> : <></> }
        <div className="layout-content">
          {children}
        </div>
      </Container>
      <Sidebar isSmallDevice={isSmallDevice} />
    </div>
  )
}

export default ContentComponent