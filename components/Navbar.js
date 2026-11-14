import Link from "next/link";
import { cv } from "@/data/cv";

const links = [
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold">
          {cv.name}
        </Link>
        {/* TODO: add a mobile menu so this works on small screens */}
        <ul className="hidden gap-6 text-sm sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
