'use client';
import Sidebar from '@/components/sidebar/sidebar';
import { SidebarContext } from '@/store/sidebarContext/sidebarContext';
import { Container } from '@chakra-ui/react';
import { ReactNode, useContext, useEffect, useState } from 'react';
import { useMediaQuery, useIsClient } from 'usehooks-ts';
import { RxHamburgerMenu } from 'react-icons/rx';

function ContentComponent({ children }: { children: ReactNode }) {

  // this temporary solution until using 'suppressHydrationWarning={true}'
  const isClient = useIsClient();
  const { isOpen, toggleSidebar } = useContext(SidebarContext);
  const isSmallDevice: boolean = useMediaQuery('(max-width : 1199px)');

  if (isClient === false) return "Loading...";

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