"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
  ];

  return (
    <nav className="pt-[2.22rem] pb-4 pl-[1.37rem] pr-60 border-b border-neutral-light">
      <div className="flex items-center justify-between">
        {/* Logo/Brand */}
        <Link
          href="/"
          className="text-[2.125rem] font-normal letter-spacing-[-0.085rem] font-allison"
        >
          K.. Rajesh.
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-16">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-desktop-subheading-s6 ${
                  isActive ? "text-primary-dark" : "text-neutral-medium"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary-yellow" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
