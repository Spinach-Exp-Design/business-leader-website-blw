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
    <nav className="pt-4 pl-[1.37rem] max-lg:pl-8 max-lg:pr-9 max-md:pl-6 max-md:pr-5 pb-1 pr-60 border-b border-neutral-light relative">
      {pathname === "/" && (
        <>
          <div className="w-px h-full bg-neutral-light top-0 left-36 absolute z-[-1] max-lg:hidden" />
          <div className="w-px h-full bg-neutral-light bottom-0 right-36 absolute z-[-1] max-lg:hidden" />
        </>
      )}
      <div className="flex items-center justify-between">
        {/* Logo/Brand */}
        <Link
          href="/"
          className="text-[2.125rem] font-normal letter-spacing-[-0.085rem] font-allison"
        >
          K.. Rajesh.
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-4 max-md:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-desktop-subheading-s6 max-lg:text-mobile-subheading-s3 w-22.25 max-md:w-16 max-md:text-mobile-subheading-s3 text-center transition-colors ${
                  isActive
                    ? "text-primary-dark font-medium"
                    : "text-neutral-medium hover:text-primary-dark"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-[1.219rem] left-0 right-0 h-px bg-primary-yellow" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
