"use client";

import { useState } from "react";

const links = [
  { label: "about", href: "#about" },
  { label: "experience", href: "#experience" },
  { label: "projects", href: "#projects" },
  { label: "contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-surface-border bg-surface/80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-terminal-green font-bold text-sm tracking-wider">
          ~/abhishek
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-text-muted hover:text-terminal-green transition-colors"
          aria-label="Toggle menu"
        >
          {open ? "[x]" : "[=]"}
        </button>

        <ul className="hidden md:flex gap-6 text-xs text-text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-terminal-green transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <ul className="md:hidden border-t border-surface-border px-6 py-4 space-y-3 text-xs text-text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-terminal-green transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
