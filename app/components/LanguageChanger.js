'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import { useState } from 'react';
import { SiGoogletranslate } from "react-icons/si";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { AiOutlineGlobal } from "react-icons/ai";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  
  const handleChange = e => {
    const newLocale = e;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    // <select onChange={handleChange}>
    //   <option><SiGoogletranslate /></option>
    //   <option value="en">English</option>
    //   <option value="ar">arabic</option>
    // </select>
    <Dropdown >
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          {/* <SiGoogletranslate className='text-white text-2xl' /> */}
          <AiOutlineGlobal className="text-gray-400 text-2xl" />
        </Button>
        
      </DropdownTrigger>
      <DropdownMenu aria-label="Example with disabled actions" className='glass'>
        <DropdownItem className='t-text' key="new" onClick={() => handleChange("en")}>English</DropdownItem>
        <DropdownItem className='t-text' key="copy" onClick={() => handleChange("ar")}>Arabic</DropdownItem>
        
      </DropdownMenu>
    </Dropdown>
  );
}