import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Droplets, ChevronDown } from 'lucide-react';
import { COMPANY } from '../lib/content';
import { SERVICE_PAGES } from '../lib/servicePages';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Service Areas', to: '/service-areas' },
  { label: 'Remodeling', to: '/remodeling' },
  { label: 'Special Offers', to: '/special-offers' },
  { label: 'Blog', to: '/blog' },
  { label: 'About Us', to: '/about' },
];

const PLUMBING_SERVICES = SERVICE_PAGES.find((c) => c.id === 'plumbing')!.services;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobilePlumbingOpen, setMobilePlumbingOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setMobilePlumbingOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const openDropdown = () => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setDropdownOpen(true);
  };
  const closeDropdown = () => {
    dropdownTimer.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const linkClass = (isActive: boolean) =>
    `rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
      scrolled
        ? isActive
          ? 'text-blue-600'
          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
        : isActive
          ? 'text-blue-200'
          : 'text-white/85 hover:text-white hover:bg-white/10'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 glass shadow-soft py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2.5">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-500 ${
              scrolled ? 'bg-blue-500 text-white' : 'bg-white/15 text-white glass'
            }`}
          >
            <Droplets className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="flex flex-col leading-none">
            <span className={`text-[15px] font-extrabold tracking-tight transition-colors duration-500 ${scrolled ? 'text-navy-800' : 'text-white'}`}>
              Terrano
            </span>
            <span className={`text-[10px] font-medium tracking-wide transition-colors duration-500 ${scrolled ? 'text-gray-500' : 'text-white/70'}`}>
              PLUMBING & REMODELING
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {/* Plumbing Services dropdown */}
          <li
            ref={dropdownRef}
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <Link
              to="/plumbing-services"
              className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
                location.pathname.startsWith('/plumbing-services')
                  ? scrolled ? 'text-blue-600' : 'text-blue-200'
                  : scrolled ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' : 'text-white/85 hover:text-white hover:bg-white/10'
              }`}
            >
              Plumbing Services
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </Link>

            {/* Dropdown panel */}
            {dropdownOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="grid w-[640px] grid-cols-2 gap-0.5 rounded-2xl border border-gray-100 bg-white p-3 shadow-card-hover">
                  <Link
                    to="/plumbing-services"
                    className="col-span-2 flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-3 text-sm font-bold text-blue-700 transition-colors hover:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
                  >
                    All Services
                  </Link>
                  {PLUMBING_SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/plumbing-services/${s.slug}`}
                      className="flex items-center gap-2.5 rounded-lg px-3.5 py-2.5 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
                    >
                      <s.icon className="h-4 w-4 flex-shrink-0 text-blue-500" strokeWidth={1.8} />
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className={linkClass(location.pathname === link.to)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${scrolled ? 'text-navy-800 hover:text-blue-600' : 'text-white hover:text-blue-100'}`}
          >
            <Phone className="h-4 w-4" />
            {COMPANY.phone}
          </a>
          <Link
            to="/free-estimate"
            className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:bg-blue-600 hover:shadow-card-hover active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
          >
            Get Estimate
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 lg:hidden ${
            scrolled ? 'text-navy-800 bg-gray-100' : 'text-white bg-white/10 glass'
          }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`overflow-hidden transition-all duration-400 lg:hidden ${open ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="mx-4 mt-3 max-h-[80vh] overflow-y-auto rounded-2xl bg-white p-4 shadow-card">
          <ul className="flex flex-col gap-1">
            <li>
              <Link to="/" className="block rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200">
                Home
              </Link>
            </li>

            {/* Plumbing Services accordion */}
            <li>
              <button
                onClick={() => setMobilePlumbingOpen((v) => !v)}
                aria-expanded={mobilePlumbingOpen}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
              >
                Plumbing Services
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobilePlumbingOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobilePlumbingOpen && (
                <div className="mt-1 flex flex-col gap-0.5 border-l-2 border-blue-100 pl-3">
                  <Link
                    to="/plumbing-services"
                    className="rounded-lg px-4 py-2.5 text-sm font-bold text-blue-700 transition-colors hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
                  >
                    All Services
                  </Link>
                  {PLUMBING_SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/plumbing-services/${s.slug}`}
                      className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
                    >
                      <s.icon className="h-4 w-4 flex-shrink-0 text-blue-400" strokeWidth={1.8} />
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {NAV_LINKS.filter((l) => l.label !== 'Home').map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2 border-t border-gray-100 pt-3">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-gray-50 px-4 py-3 text-base font-semibold text-navy-800 transition-colors hover:bg-gray-100 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-200"
            >
              <Phone className="h-5 w-5" />
              {COMPANY.phone}
            </a>
            <Link
              to="/free-estimate"
              className="rounded-xl bg-blue-500 px-4 py-3 text-center text-base font-semibold text-white shadow-glow transition-colors hover:bg-blue-600 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
