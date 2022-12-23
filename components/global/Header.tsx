"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaBars,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { HeaderPayload } from "types";

const Header = ({
  data: { logo, menuItems, social },
}: {
  data: HeaderPayload;
}) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed w-full top-0 flex flex-wrap items-center justify-between px-2 py-3 bg-dark z-10">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            className="text-2xl sm:text-3xl font-bold leading-relaxed inline-block py-2 whitespace-nowrap text-white hover:text-primary transition-all"
            href="/"
          >
            {logo && logo}
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            aria-label="Hamburger Menu"
            onClick={() => setNavbarOpen((prevOpen) => !prevOpen)}
          >
            <FaBars className="hover:text-primary transition-all text-2xl " />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center " +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none m-auto lg:mr-0 ">
            {menuItems &&
              menuItems.map((item) =>
                item.slug && item.slug.startsWith("/#") ? (
                  <li className="nav-item" key={item._id}>
                    <a
                      className="px-3 py-2 flex  items-center text-base uppercase text-base leading-snug text-white hover:text-primary transition-all"
                      href={item._type === "home" ? "/" : `${item.slug}`}
                    >
                      <span className="lg:ml-2 m-auto">
                        {item.title && item.title}
                      </span>
                    </a>
                  </li>
                ) : (
                  <li className="nav-item" key={item._id}>
                    <Link
                      className="px-3 py-2 flex  items-center text-base uppercase text-base leading-snug text-white hover:text-primary transition-all"
                      href={item._type === "home" ? "/" : `${item.slug}`}
                    >
                      <span className="lg:ml-2 m-auto">
                        {item.title && item.title}
                      </span>
                    </Link>
                  </li>
                )
              )}

            <div className="flex flex-row list-none lg:ml-auto">
              {social &&
                social.map((item: any) => (
                  <li className="nav-item lg:ml-2 m-auto" key={item._key}>
                    <a
                      href={`${item?.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={
                        (item?.media === "facebook" && "facebook") ||
                        (item?.media === "instagram" && "instagram") ||
                        (item?.media === "twitter" && "twitter") ||
                        (item?.media === "linkedin" && "linkedin") ||
                        ((item?.media === "youtube" && "youtube") as string)
                      }
                      className="px-1 py-2 flex items-center text-base uppercase text-base leading-snug text-white hover:text-primary transition-all"
                    >
                      {item?.media === "facebook" && <FaFacebook />}
                      {item?.media === "instagram" && <FaInstagram />}
                      {item?.media === "twitter" && <FaTwitter />}
                      {item?.media === "linkedin" && <FaLinkedin />}
                      {item?.media === "youtube" && <FaYoutube />}
                    </a>
                  </li>
                ))}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
