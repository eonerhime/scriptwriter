import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="hidden h-8 min-[601px]:flex gap-6 uppercase text-xs">
      <ul className="flex gap-8 items-center">
        <li>
          <Link
            href="/"
            className="hover-text-accent-700 group  transition-all duration-300 ease-in-out"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-accent-700 to-accent-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover-text-accent-700 group  transition-all duration-300 ease-in-out"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-accent-700 to-accent-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              About
            </span>
          </Link>
        </li>

        <li>
          <Link
            href="/services"
            className="hover-text-accent-700 group  transition-all duration-300 ease-in-out"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-accent-700 to-accent-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Services
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/gallery"
            className="hover-text-accent-700 group  transition-all duration-300 ease-in-out"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-accent-700 to-accent-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Gallery
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            className="hover-text-accent-700 group  transition-all duration-300 ease-in-out"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-accent-700 to-accent-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Portfolio
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="hover-text-accent-700 group  transition-all duration-300 ease-in-out"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-accent-700 to-accent-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Blog
            </span>
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover-text-accent-700 group  transition-all duration-300 ease-in-out"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-accent-700 to-accent-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Contact
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
