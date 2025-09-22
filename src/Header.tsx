// src/Header.tsx
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Styling/index.css";

type Section = { label: string; path: string };

const sections: Section[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Templates", path: "/templates" },
  { label: "Pricing", path: "/pricing" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close the mobile menu after navigation
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const baseLink =
    "block py-2 px-3 md:p-0 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500";

  const activeClass = "text-blue-500";

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 bg-black/90 text-white backdrop-blur dark:bg-gray-900/80">
        <div className="max-w-screen-xl mx-auto h-16 px-4 flex items-center justify-between">
          <Link
            to="/"
            className="shrink-0 flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl whitespace-nowrap">
              Luis Saravia
            </span>
          </Link>

          <div className="ml-auto flex items-center gap-6">
            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-controls="mobile-menu"
              aria-expanded={open}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg
                         text-gray-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" viewBox="0 0 17 14" fill="none">
                <path
                  d="M1 1h15M1 7h15M1 13h15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8 text-xl">
              {sections.map(({ label, path }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `${baseLink} ${isActive ? activeClass : ""}`
                    }
                    end={path === "/"} // ensure exact match for Home
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* spacer for fixed header */}
      <div className="pt-16" />

      {/* Backdrop */}
      <button
        onClick={() => setOpen(false)}
        aria-hidden
        className={`fixed inset-0 top-16 z-40 bg-black/30 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed top-16 inset-x-0 z-50 origin-top bg-black text-white dark:bg-gray-900 shadow-lg 
                    transition duration-300 ease-out
                    ${
                      open
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
        role="dialog"
        aria-modal="true"
      >
        <ul className="px-4 py-4 space-y-2 text-xl">
          {sections.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `block py-2 px-3 rounded-sm hover:bg-white/10 ${isActive ? "text-blue-400" : ""}`
                }
                end={path === "/"}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
