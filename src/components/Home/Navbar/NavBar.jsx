// Navbar.js
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/assets/images/logo/rocketLogo.png"
import Image from "next/image";
import menuData from "./menuData";
import { IoIosArrowDown } from "react-icons/io";
import { TiArrowRight } from "react-icons/ti";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const NavBar = () => {
  const [showSubMenu, setShowSubMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSubMenu = (index) => {
    setShowSubMenu((prevShowSubMenu) =>
      prevShowSubMenu === index ? null : index
    );
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const closeSubMenuOnOutsideClick = (event) => {

      if (showSubMenu !== null && !event.target.closest(".sub-menu")) {
        setShowSubMenu(null);
      }
    };


    document.addEventListener("click", closeSubMenuOnOutsideClick);


    return () => {
      document.removeEventListener("click", closeSubMenuOnOutsideClick);
    };
  }, [showSubMenu]);

  const router = usePathname();
  return (
    <>
      <nav
        className="menu-top w-full sm:w-max-[650px] xs:w-max-[340px] xxs:w-max-[340px] flex items-center justify-center gap-28 py-5 px-12 2xl:px-0 2xl:py-6 2xl:gap-0 xl:px-8 xl:py-6 xl:gap-0 bg-black/90">
        {/* Navbar */}
        <div className="responsive-menu flex items-center justify-center gap-24 2xl:gap-6 xl:gap-6">
          <Link
            href="/"
            className="flex items-start justify-start w-44 mb-4 h-auto ml-28 2xl:w-44 2xl:h-auto 2xl:ml-40 xl:ml-32"
          >
            <Image src={Logo} alt="Logo" width={250} height={250} />
          </Link>

          <button
            type="button"
            className="text-white open-menu"
            onClick={toggleMenu}
          >
            <GiHamburgerMenu size={40} />
          </button>

          <div
            className={`flex justify-between main-menu ${isMenuOpen ? "main-menu-opened" : ""
              }`}
          >
            <div className="inner-menu-top">
              <Link
                href="/"
                className="flex items-start justify-start w-56 h-auto ml-28 2xl:w-44 2xl:h-auto 2xl:ml-40  xl:ml-32"
              >
                <Image src={Logo} alt="Logo" width={250} height={250} />
              </Link>
              <button type="button" className={`text-black close-menu`} onClick={closeMenu}>
                <IoCloseSharp size={40} />
              </button>
            </div>
            <div className="left flex items-center justify-center space-x-4 gap-4 text-white lg:text-black text-2xl 2xl:text-xl xl:text-lg">
              {menuData.map((item, index) => (
                <div
                  key={item.id}
                  className="relative cursor-pointer mx-4 "
                  onClick={() => toggleSubMenu(index)}
                >
                  <div className="flex items-center gap-3 hover:text-red-500">
                    <Link href={item.link} className="nav-link ">
                      {item.title}
                    </Link>
                    {(item.title === "Solutions" ||
                      item.title === "Benefits") && (
                        <span>
                          <IoIosArrowDown />
                        </span>
                      )}
                  </div>
                  {showSubMenu === index &&
                    item.has_dropdown &&
                    item.sub_menus && (
                      <div className="sub-menu absolute rounded-md right-1 sm:right-0 mt-2 p-4 sm:p-0 lg:p-2 w-[500px] xl:w-[480px] xs:w-[300px] xxs:w-[250px] bg-white text-black flex flex-col shadow-md lg:shadow-none z-10">
                        {/* Nested pages */}
                        {item.sub_menus.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.link}
                            className="flex flex-col p-2 mx-2 sm:p-0 sm:mx-0 "
                          >
                            <div className="flex items-center gap-2 nav-sublink">
                              <p className="text-xl font-semibold relative cursor-pointer lg:text-lg md:text-sm sm:text-base">
                                {subItem.title}
                              </p>
                              <span className="transition-transform duration-100 transform translate-x-2 ti-arrow hidden">
                                <TiArrowRight />
                              </span>
                            </div>
                            <p className="text-base py-1 sm:text-xs">{subItem.subTitle}</p>
                          </Link>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>

            {/* Right section with Login and Try Free button */}
            <div className="right flex items-center justify-center space-x-6 text-xl ml-56 xl:ml-40">
              <Link href="/login" className="text-white lg:text-black hover:text-red-500">
                Login
              </Link>
              <button className="bg-red-500/90 text-black font-semibold px-12 py-4 rounded-lg hover:text-white xl:py-2 xl:text-base xl:px-8">
                Try Free
              </button>
            </div>
          </div>
        </div>

        {/* mobile navMenu */}

        {/* <div className="lg:flex ">
            
        </div> */}
      </nav>
    </>
  );
};

export default NavBar;
