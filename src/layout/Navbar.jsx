import React, { useState } from "react";
import Button from "../components/Button";
import { Menu, X } from "lucide-react";
import { useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  // { href: "#testimonials", label: "Testimonials" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}  z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-[var(--color-primary)] transition"
        >
          {/* TC<span>.</span> */}
          <img
            src="/NavLogo.png"
            alt="TC Logo"
            loading="lazy"
            className="h-10 md:h-10 lg:h-12 w-auto rounded-full object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] rounded-full hover:bg-[var(--color-surface)] transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#contact">
            <Button size="sm">Contact Me</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[var(--color-foreground)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full backdrop-blur-md bg-black/40 animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-md py-2 text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition"
              >
                {link.label}
              </a>
            ))}

            <a href="#contact">
              <Button size="sm">Contact Me</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
