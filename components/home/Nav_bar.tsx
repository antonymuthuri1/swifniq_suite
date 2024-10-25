'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import useColorMode from '@/components/home/hooks/useColorMode';

const Navbar: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode();
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleThemeToggle = () => {
    if (typeof setColorMode === 'function') {
      setColorMode(colorMode === 'dark' ? 'light' : 'dark');
    }
  };

  const handleMouseEnter = (item: string) => {
    setDropdown(item);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  const handleMobileDropdownToggle = (item: string) => {
    setDropdown(dropdown === item ? null : item);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
    setDropdown(null);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
      setMobileMenuOpen(false);
      setDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className=" fixed w-full  p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/" className="text-white bg-orange-1">
            <Image src="/logo c.png" width={200} height={35} alt="logo" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 z-5">
          <div
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <Link href="#benefits" className="text- text-white dark:text-white  hover:text-orange-1 dark:hover:text-orange-1 font-bold">
              Why us?
            </Link>

            {/* {dropdown === 'products' && (
              <div className="absolute top-full w-48 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-md border border-blue-1 dark:border-white">
                <Link href="/swifniq-suite" className="block px-4 py-2 hover:text-white hover:bg-blue-1 dark:hover:bg-white dark:hover:text-orange-1 font-bold" onClick={handleMenuItemClick}>Swifniq Suite</Link>
              </div>
            )} */}
          </div>
          <div
            onMouseEnter={() => handleMouseEnter('solutions')}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <Link href="#features" className="text-white dark:text-white  hover:text-orange-1 dark:hover:text-orange-1 font-bold">
            Features
            </Link>
            {/* {dropdown === 'solutions' && (
              <div className="absolute top-full w-48 bg-blue-1 dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-md border border-blue-1 dark:border-white">
                <Link href="/ai-solutions" className="block px-4 py-2 hover:text-white hover:bg-blue-1 dark:hover:bg-white dark:hover:text-orange-1 font-bold" onClick={handleMenuItemClick}>AI Solutions</Link>
                <Link href="/automations" className="block px-4 py-2 hover:text-white hover:bg-blue-1 dark:hover:bg-white dark:hover:text-orange-1 font-bold" onClick={handleMenuItemClick}>Automations</Link>
                <Link href="/custom-solutions" className="block px-4 py-2 hover:text-white hover:bg-blue-1 dark:hover:bg-white dark:hover:text-orange-1 font-bold" onClick={handleMenuItemClick}>Custom Solutions</Link>
                <Link href="/digital-marketing" className="block px-4 py-2 hover:text-white hover:bg-blue-1 dark:hover:bg-white dark:hover:text-orange-1 font-bold" onClick={handleMenuItemClick}>Digital Marketing</Link>
                <Link href="/repairs" className="block px-4 py-2 hover:bg-blue-1 hover:text-white dark:hover:bg-white dark:hover:text-orange-1 font-bold" onClick={handleMenuItemClick}>Repairs</Link>
                <Link href="/solar-power" className="block px-4 py-2 hover:text-white hover:bg-blue-1 dark:hover:bg-white dark:hover:text-orange-1 font-bold" onClick={handleMenuItemClick}>Solar Power</Link>
              </div>
            )} */}
          </div>
          <Link href="#pricing" className="text-white dark:text-white hover:text-orange-1 dark:hover:text-orange-1 font-bold">
            Pricing
          </Link>
        </div>
        <div className="flex items-center space-x-4 z-">
          
          {/* {colorMode === 'dark' ? (
            <MoonIcon className="w-7 h-7 text-gray-200" onClick={handleThemeToggle} />
          ) : (
            <SunIcon className="w-7 h-7 text-orange-1" onClick={handleThemeToggle}/>
          )} */}
          <div className="hidden md:flex space-x-4">

            <button className="signin-btn" onClick={() => window.location.href = '/sign-in'}>Sign In</button>

            <button className="get-started-btn-nav" onClick={() => window.location.href = '#pricing'}>Get Started</button>

            
          </div>
          
          <button
            className="md:hidden text-white bg-transparent hover:bg-transparent"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="w-9 h-9 bg-blue-1 dark:bg-white dark:text-orange-1 rounded-md hover:bg-orange-1" />
            ) : (
              <Bars3Icon className=" w-9 h-9 bg-blue-1 dark:bg-white dark:text-orange-1 rounded-lg hover:bg-orange-1" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {mobileMenuOpen && (
        <div className=" fixed inset-0 mt-16  z-20" ref={mobileMenuRef}>
          <div className=" absolute border-none top-0 right-0 w-52  mr-2 rounded-lg pt-2 pb-4 shadow-2xl bg-blue-1 dark:bg-gray-900 " onMouseLeave={handleMouseLeave}>
            <div className="px-4 py-2 flex justify-between items-center" onClick={() => handleMobileDropdownToggle('products')}>
              <Link href="#benefits" className="block font-bold text-white hover:text-orange-1" onClick={handleMenuItemClick}>
              Why us?
              </Link>

              {/* {dropdown === 'products' ? (
                <ChevronUpIcon className="w-5 h-5 text-white" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 text-white" />
              )} */}

            </div>

            {/* {dropdown === 'products' && (
              <div className="ml-4 px-4 mb-3">
                <Link href="/swifniq-suite" className="block text-orange-1 hover:text-white text-sm" onClick={handleMenuItemClick}>
                  Swifniq Suite
                </Link>
              </div>
            )} */}

            <div className="px-4 py-2 flex justify-between items-center" onClick={() => handleMobileDropdownToggle('solutions')}>
              <Link href="#features" className="block font-bold text-white hover:text-orange-1" onClick={handleMenuItemClick}>
                Features
              </Link>

              {/* {dropdown === 'solutions' ? (
                <ChevronUpIcon className="w-5 h-5 text-white" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 text-white" />
              )} */}

            </div>

            {/* {dropdown === 'solutions' && (
              <div className="ml-4 px-4 mb-3">
                <Link href="/ai-solutions" className="block text-orange-1 hover:text-white text-sm" onClick={handleMenuItemClick}>
                  AI Solutions
                </Link>
                <Link href="/automations" className="block text-orange-1 hover:text-white text-sm" onClick={handleMenuItemClick}>
                  Automations
                </Link>
                <Link href="/custom-solutions" className="block text-orange-1 hover:text-white text-sm" onClick={handleMenuItemClick}>
                  Custom Solutions
                </Link>
                <Link href="/digital-marketing" className="block text-orange-1 hover:text-white text-sm" onClick={handleMenuItemClick}>
                  Digital Marketing
                </Link>
                <Link href="/repairs" className="block text-orange-1 hover:text-white text-sm" onClick={handleMenuItemClick}>
                  Repairs
                </Link>
                <Link href="/solar-power" className="block text-orange-1 hover:text-white text-sm" onClick={handleMenuItemClick}>
                  Solar Power
                </Link>
              </div>
            )} */}

            <div className="px-4 py-2">
              <Link href="#pricing" className="block font-bold text-white hover:text-orange-1" onClick={handleMenuItemClick}>
                Pricing
              </Link>
            </div>


            <button className="signin-btn-sm h-11" onClick={() => window.location.href = '/sign-in'}>Sign In</button>

            <button className="get-started-btn-nav-sm h-11 ml-200" onClick={ () => 
              { setMobileMenuOpen(false);
                window.location.href = '#pricing';
               }  
               }>Get Started</button>

            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

