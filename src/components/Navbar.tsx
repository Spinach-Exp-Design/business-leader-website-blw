"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
  ];

  return (
    <nav className="pt-4 pl-[1.37rem] pb-1 pr-60 border-b border-neutral-light">
      <div className="flex items-center justify-between">
        {/* Logo/Brand */}
        <Link
          href="/"
          className="text-[2.125rem] font-normal letter-spacing-[-0.085rem] font-allison"
        >
          K.. Rajesh.
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-desktop-subheading-s6 w-22.25 text-center ${
                  isActive ? "text-primary-dark" : "text-neutral-medium"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-5 left-0 right-0 h-[2px] bg-primary-yellow" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
