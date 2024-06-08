"use client";
import React, { useState, useContext } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { SidebarContext } from "@/store/sidebarContext/sidebarContext";
import data from "./sidebarRoutes";
import { ISidebar, ISidebarData, ISidebarItem } from "@/types/dashboard/sidebar";
import { usePathname } from "next/navigation";

function Sidebar({ isSmallDevice }: ISidebar) {

  const [onHover, setOnHover] = useState<boolean>(false);
  const [isChildrenOpen, setIsChildrenOpen] = useState<number | null>(null);

  const { isOpen, toggleSidebar } = useContext(SidebarContext);
  const pathName = usePathname();

  //* Handlers
  const handleOpenSidebarOnHover = () => {
    setOnHover((prev) => !prev);
  }
  const handleIsChildrenOpen = (index: number) => {
    setIsChildrenOpen((prev: number | null) => prev === index ? null : index);
  };

  return (
    <Box as={"div"} className={`layout-sidebar${(isOpen || onHover) ? "" : " close"}${(isSmallDevice && !isOpen) ? " small-screen" : ""}`} onMouseEnter={handleOpenSidebarOnHover} onMouseLeave={handleOpenSidebarOnHover}>
      <Flex as={"div"} className={`${(isOpen || onHover) ? "" : "sidebar-header"}`} justifyContent={"space-between"} alignItems={"center"} w={"100%"}>
        {isSmallDevice ? <Box as={"div"}></Box> :<Box as="span" p={"1.5rem"} onClick={toggleSidebar}><RxHamburgerMenu /></Box>}
        {(isOpen || onHover) ? <Box as="span" p={"1.5rem"} display={"block"} position={"relative"} w={"80px"} h={"80px"}>
          <Image src={Logo} alt="logo" width={1000} height={1000} />
        </Box> : <></>}
      </Flex>
      <Flex className={`${(isOpen || onHover) ? "list-container open" : "list-container"}`} direction={"column"} alignItems={"flex-end"}>

        {data.map(({ title, line, items }: ISidebarData, index) => {
          return <React.Fragment key={index}>
            {<hr className={`line${line ? "" : " no-line"}`} />}
            {title && <Box as="h6" mb={"8px"} w={"100%"} textAlign={"right"} fontWeight={600} className={`${(isOpen || onHover) ? "sidebar-title" : "sidebar-title close"}`}>{title}</Box>}

            <Box as={"div"} w={"100%"}>
              <Flex as={"ul"} className="list-items" w={"100%"} direction={"column"}>
                {items.map(({ title, icon, path, action, children }: ISidebarItem, index: number) => {
                  const isActive: boolean = path ? pathName.startsWith(path) : false;

                  return <React.Fragment key={index}>
                    <Flex as={"li"} className={`item${isActive ? " active" : ""}`} justifyContent={"flex-end"} p={"5px 20px"} w={"100%"} key={index}>{/* // I make this flex not Box to remove list style */}
                      <Flex className={"item-content"} alignItems={"center"}>
                        {(isOpen || onHover) ? <Box as="span" w={"100%"} textAlign={"right"}>
                          {
                            children ?
                              <Flex as="div" w={"100%"} alignItems={"center"} cursor={"pointer"} onClick={() => handleIsChildrenOpen(index)}>
                                <IoMdArrowDropdown />
                                <Box as={"span"} className="link-item">{title}</Box>
                              </Flex>
                              : path ?
                                <Link href={path ?? ""} className="link-item">{title}</Link>
                                : <Box as={"span"} onClick={action} className="link-item">{title}</Box>
                          }
                        </Box> : <></>}
                        <Box as="span" ml={"10px"}>{icon}</Box>
                      </Flex>
                    </Flex>
                    {/* sub List */}
                    {children && isChildrenOpen === index ?
                      <Flex as={"ul"} className={`list-items children${isChildrenOpen ? " open" : ""}`} w={"100%"} direction={"column"}>
                        {children.map(({ title, icon, path }: any, index: number) => {
                          const isActive: boolean = path ? pathName.startsWith(path) : false;

                          return <Flex as={"li"} className={`item${isActive ? " active" : ""}`} justifyContent={"flex-end"} p={"5px 20px"} w={"100%"} key={index}>{/* // I make this flex not Box to remove list style */}
                            <Flex className={"item-content"} alignItems={"center"}>
                              {(isOpen || onHover) ? <Box as="span" w={"100%"} textAlign={"right"}>
                                <Link href={path ?? "/"} className="link-item">{title}</Link>
                              </Box> : <></>}
                              <Box as="span" ml={"10px"}>{icon}</Box>
                            </Flex>
                          </Flex>
                        })}
                      </Flex>
                      : <></>}
                  </React.Fragment>
                })}
              </Flex>
            </Box>
          </React.Fragment>
        })}

      </Flex>
    </Box >
  );
}

export default Sidebar;

{
  /**
      <div className={`layout-sidebar ${isOpen ? "" : "close"}`}>
      <Flex as={"div"} justifyContent={"space-between"} alignItems={"center"} w={"100%"}>
        <Box as="span" p={"1.5rem"} onClick={handleIsOpenSidebar}>icon</Box>
        {isOpen ? <Box as="span" p={"1.5rem"} display={"block"} position={"relative"} w={"80px"} h={"80px"}>
          <Image src={Logo} alt="logo" width={1000} height={1000} />
        </Box> : <></>}
      </Flex>
      <Box as={"div"} w={"100%"} px={"1.5rem"} justifyContent={"flex-end"}>
        <Flex as={"ul"} w={"100%"} gap={"10px"} direction={"column"}>
          <Flex as={"li"} justifyContent={"flex-end"} p={"5px 20px"} w={"100%"}>// I make this flex not Box to remove list style
          <Flex>
          {isOpen ? <Box as="span">
            <Link href="#" className="link-item">الرئيسية</Link>
          </Box> : <></>}
          <Box as="span" w={"2rem"} ml={"10px"}><Home /></Box>
        </Flex>
      </Flex>
      <Flex as={"li"} justifyContent={"flex-end"} p={"5px 20px"} w={"100%"}>// I make this flex not Box to remove list style
        <Flex>
          {isOpen ? <Box as="span">
            <Link href="#" className="link-item">الرئيسية</Link>
          </Box> : <></>}
          <Box as="span" w={"2rem"} ml={"10px"}><Home /></Box>
        </Flex>
      </Flex>
      <Flex as={"li"} justifyContent={"flex-end"} p={"5px 20px"} w={"100%"}>// I make this flex not Box to remove list style
        <Flex>
          {isOpen ? <Box as="span">
            <Link href="#" className="link-item">الرئيسية</Link>
          </Box> : <></>}
          <Box as="span" w={"2rem"} ml={"10px"}>in</Box>
        </Flex>
      </Flex>
      <Flex as={"li"} justifyContent={"flex-end"} p={"5px 20px"} w={"100%"}>// I make this flex not Box to remove list style
        <Flex>
          {isOpen ? <Box as="span">
            <Link href="#" className="link-item">الرئيسية</Link>
          </Box> : <></>}
          <Box as="span" w={"2rem"} ml={"10px"}>in</Box>
        </Flex>
      </Flex>
    </Flex>
  </Box>
  <hr style={{ backgroundColor: "white" }} />
</div>
   */
}

{
  /**
   * 		<div className='layout-sidebar'>
      {
        data.map((route, index) => (
          <SidebarItem key={index} route={route} />
        ))
      }
    </div>
   */
}

//////////////////////////


// <Box as={"div"} w={"100%"}>

// <Flex as={"ul"} className="list-items" w={"100%"} gap={"10px"} direction={"column"}>
//   {data.map(({ title, icon, path }, index) => {
//     return (
//     <Flex as={"li"} className="item" justifyContent={"flex-end"} p={"5px 20px"} w={"100%"} key={index}>{/* // I make this flex not Box to remove list style */}
//       <Flex className={"item-content"} alignItems={"center"}>
//         {isOpen ? <Box as="span" width={"100%"} textAlign={"right"}>
//           <Link href={path ?? "/"} className="link-item">{title}</Link>
//         </Box> : <></>}
//         <Box as="span" w={"2rem"} ml={"10px"}>{icon}</Box>
//       </Flex>
//     </Flex>
//     )
//   })}
// </Flex>
// </Box>
{
  /**
    <div className={`layout-sidebar ${isOpen ? "" : "close"}`}>
      <Flex as={"div"} className={`${isOpen ? "" : "sidebar-header"}`} justifyContent={"space-between"} alignItems={"center"} w={"100%"}>
        <Box as="span" p={"1.5rem"} onClick={handleIsOpenSidebar}><RxHamburgerMenu /></Box>
        {isOpen ? <Box as="span" p={"1.5rem"} display={"block"} position={"relative"} w={"80px"} h={"80px"}>
          <Image src={Logo} alt="logo" width={1000} height={1000} />
        </Box> : <></>}
      </Flex>
      <Flex className={`${isOpen ? "list-container open" : "list-container"}`} direction={"column"} alignItems={"flex-end"}>
        <Box as={"div"} w={"100%"}>

          <Flex as={"ul"} className="list-items" w={"100%"} gap={"10px"} direction={"column"}>
            <Flex as={"li"} className="item" justifyContent={"flex-end"} p={"5px 20px"} w={"100%"}>// I make this flex not Box to remove list style
            <Flex className={"item-content"} alignItems={"center"}>
            {isOpen ? <Box as="span">
              <Link href="#" className="link-item">الرئيسية</Link>
            </Box> : <></>}
            <Box as="span" w={"2rem"} ml={"10px"}><VscIcon.VscDashboard /></Box>
          </Flex>
        </Flex>

        <Flex as={"li"} className="item" justifyContent={"flex-end"} p={"5px 20px"} w={"100%"}>// I make this flex not Box to remove list style
          <Flex className={"item-content"} alignItems={"center"}>
            {isOpen ? <Box as="span">
              <Link href="#" className="link-item">الرئيسية</Link>
            </Box> : <></>}
            <Box as="span" w={"2rem"} ml={"10px"}><MdIcon.MdOutlineSensors /></Box>
          </Flex>
        </Flex>

        <Flex as={"li"} className="item" justifyContent={"flex-end"} p={"5px 20px"} w={"100%"}>// I make this flex not Box to remove list style
          <Flex className={"item-content"} alignItems={"center"}>
            {isOpen ? <Box as="span">
              <Link href="#" className="link-item">الرئيسية</Link>
            </Box> : <></>}
            <Box as="span" w={"2rem"} ml={"10px"}><Fa6Icon.FaRegPaperPlane /></Box>
          </Flex>
        </Flex>
        <Flex as={"li"} className="item" justifyContent={"flex-end"} p={"5px 20px"} w={"100%"}>// I make this flex not Box to remove list style
          <Flex className={"item-content"} alignItems={"center"}>
            {isOpen ? <Box as="span">
              <Link href="#" className="link-item">الرئيسية</Link>
            </Box> : <></>}
            <Box as="span" w={"2rem"} ml={"10px"}><PiIcon.PiAddressBook /></Box>
          </Flex>
        </Flex>
        <Flex as={"li"} className="item" justifyContent={"flex-end"} p={"5px 20px"} w={"100%"}>// I make this flex not Box to remove list style
          <Flex className={"item-content"} alignItems={"center"}>
            {isOpen ? <Box as="span">
              <Link href="#" className="link-item">الرئيسية</Link>
            </Box> : <></>}
            <Box as="span" w={"2rem"} ml={"10px"}><IoIcon.IoIosSwitch /></Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>

    <hr className={"line"} />
    {<Box as="h6" mb={"8px"} w={"100%"} textAlign={"right"} className={`${isOpen ? "sidebar-title" : "sidebar-title close"}`}>صفحات مهمه</Box>}

    <Box as={"div"} w={"100%"}>
      <Flex as={"ul"} className="list-items" w={"100%"} gap={"10px"} direction={"column"}>
        <Flex as={"li"} className="item" justifyContent={"flex-end"} p={"5px 20px"} w={"100%"}>// I make this flex not Box to remove list style
          <Flex className={"item-content"} alignItems={"center"}>
            {isOpen ? <Box as="span">
              <Link href="#" className="link-item">الرئيسية</Link>
            </Box> : <></>}
            <Box as="span" w={"2rem"} ml={"10px"}><VscIcon.VscDashboard /></Box>
          </Flex>
        </Flex>
        <Flex as={"li"} className="item" justifyContent={"flex-end"} p={"5px 20px"} w={"100%"}>// I make this flex not Box to remove list style
          <Flex className={"item-content"} alignItems={"center"}>
            {isOpen ? <Box as="span">
              <Link href="#" className="link-item">الرئيسية</Link>
            </Box> : <></>}
            <Box as="span" w={"2rem"} ml={"10px"}><LiaIcon.LiaRocketSolid /></Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>

    <hr className={"line"} />
    {<Box as="h6" mb={"8px"} w={"100%"} textAlign={"right"} className={`${isOpen ? "sidebar-title" : "sidebar-title close"}`}>صفحات مهمه</Box>}

    <Box as={"div"} w={"100%"}>
      <Flex as={"ul"} className="list-items" w={"100%"} gap={"10px"} direction={"column"}>
        <Flex as={"li"} className="item" justifyContent={"flex-end"} p={"5px 20px"} w={"100%"}>// I make this flex not Box to remove list style
          <Flex className={"item-content"} alignItems={"center"}>
            {isOpen ? <Box as="span">
              <Link href="#" className="link-item">الرئيسية</Link>
            </Box> : <></>}
            <Box as="span" w={"2rem"} ml={"10px"}><IoIcon.IoIosSettings /></Box>
          </Flex>
        </Flex>
        <Flex as={"li"} className="item" justifyContent={"flex-end"} p={"5px 20px"} w={"100%"}>// I make this flex not Box to remove list style
          <Flex className={"item-content"} alignItems={"center"}>
            {isOpen ? <Box as="span">
              <Link href="#" className="link-item">الرئيسية</Link>
            </Box> : <></>}
            <Box as="span" w={"2rem"} ml={"10px"}><Tfi.TfiKey /></Box>
          </Flex>
        </Flex>
        <Flex as={"li"} className="item" justifyContent={"flex-end"} p={"5px 20px"} w={"100%"}>// I make this flex not Box to remove list style
          <Flex className={"item-content"} alignItems={"center"}>
            {isOpen ? <Box as="span">
              <Link href="#" className="link-item">الرئيسية</Link>
            </Box> : <></>}
            <Box as="span" w={"2rem"} ml={"10px"}><Tfi.TfiPowerOff /></Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>

  </Flex>
</div>
   */
}