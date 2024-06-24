"use client";
import logo from "../assets/logo.png";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
import { useRef, useState } from "react";
import ToggleTranslation from "./ToggleTranslation";
import LanguageChanger from './LanguageChanger'

const HeaderNavbar = (props: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenuRef: any = useRef('')

  return (
    <Navbar position="sticky" height="5rem" onMenuOpenChange={setIsMenuOpen} className="border-bottom dark-bg">
      <NavbarBrand>
        <Link href="/">
          <Image
            src={logo}
            alt="hegazy flow logo"
            width={65}
            height={65}
          ></Image>
        </Link>
        <p className="font-bold text-inherit text-white text-2xl ml-2 max-sm:hidden">HEGAZY FLOW</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
            <button className="btn-box">
                <span className="button-box">
                    <Link color="foreground" href="#">
                        {props.home}
                    </Link>
                </span>
            </button>
        </NavbarItem>
        <NavbarItem isActive>
            <button className="btn-box">
                <span className="button-box">
                    <Link href="#" aria-current="page">
                        {props.studies}
                    </Link>
                </span>
            </button>       
        </NavbarItem>
        <NavbarItem>
            <button className="btn-box">
                <span className="button-box">
                    <Link color="foreground" href="#">
                        {props.contact}
                    </Link>
                </span>
            </button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
            <button className="nav-button">
                <Link href="#">{props.consultation}</Link>
            </button>
        </NavbarItem>
        <NavbarItem>
            <LanguageChanger />
        </NavbarItem>
      
      </NavbarContent>
      <NavbarContent justify="end" className="hidden max-md:flex">
        
        <NavbarMenuToggle onChange={() => {
            toggleMenuRef.current.checked = !isMenuOpen
        }} icon={
            <label className="hamburger -z-[1]">
                <input ref={toggleMenuRef} type="checkbox" />
                <svg viewBox="0 0 32 32">
                    <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path className="line" d="M7 16 27 16"></path>
                </svg>
            </label>
        }
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
        />
        
      </NavbarContent>


      <NavbarMenu className="gap-9 pt-9">
        
          <NavbarMenuItem className="w-fit mx-auto">
            <Link
              className="w-full text-white text-3xl font-bold"
              href="#"
              size="lg"
              >
              {props.home}
            </Link>
          </NavbarMenuItem>
        <NavbarMenuItem className="w-fit mx-auto">
            <Link
              className="w-full text-white text-3xl font-bold"
              href="#"
              size="lg"
              >
              {props.studies}
            </Link>
            
        </NavbarMenuItem>
        <NavbarMenuItem className="w-fit mx-auto">
            <Link
              className="w-full text-white text-3xl font-bold"
              href="#"
              size="lg"
              >
              {props.contact}
            </Link>
            
        </NavbarMenuItem>
        <NavbarMenuItem className="w-fit mx-auto">
            <button className="nav-button">
                <Link href="#">{props.consultation}</Link>
            </button>
        </NavbarMenuItem>
        <NavbarMenuItem className="w-fit mx-auto">
              <LanguageChanger />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default HeaderNavbar;
