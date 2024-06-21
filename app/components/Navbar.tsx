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

const HeaderNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenuRef: any = useRef('')

  return (
    <Navbar position="sticky" height="5rem" onMenuOpenChange={setIsMenuOpen} className="border-bottom">
      <NavbarBrand>
        <Link href="/">
          <Image
            src={logo}
            alt="hegazy flow logo"
            width={120}
            height={120}
          ></Image>
        </Link>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
            <button className="btn-box">
                <span className="button-box">
                    <Link color="foreground" href="#">
                        Home
                    </Link>
                </span>
            </button>
        </NavbarItem>
        <NavbarItem isActive>
            <button className="btn-box">
                <span className="button-box">
                    <Link href="#" aria-current="page">
                        Case Studies
                    </Link>
                </span>
            </button>       
        </NavbarItem>
        <NavbarItem>
            <button className="btn-box">
                <span className="button-box">
                    <Link color="foreground" href="#">
                        Contact
                    </Link>
                </span>
            </button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
            <button className="nav-button">
                <Link href="#">Free Consultation</Link>
            </button>
        </NavbarItem>
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
              Home
            </Link>
          </NavbarMenuItem>
        <NavbarMenuItem className="w-fit mx-auto">
            <Link
              className="w-full text-white text-3xl font-bold"
              href="#"
              size="lg"
              >
              Case Studies
            </Link>
            
        </NavbarMenuItem>
        <NavbarMenuItem className="w-fit mx-auto">
            <Link
              className="w-full text-white text-3xl font-bold"
              href="#"
              size="lg"
              >
              Contact
            </Link>
            
        </NavbarMenuItem>
        <NavbarMenuItem className="w-fit mx-auto">
            <button className="nav-button">
                    <Link href="#">Free Consultation</Link>
                </button>
            </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default HeaderNavbar;
