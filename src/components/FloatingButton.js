"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "./Button";

const btnStyle =
  "hidden gap-2 min-[700px]:flex w-28 py-3 border-2 border-primary-50 rounded-md uppercase font-bold justify-center align-middle fixed bottom-6 right-6 z-30 bg-primary-400 text-primary-50 hover:bg-accent-950 transition-all";

export default function FloatingButton() {
  const pathname = usePathname(); // Get current route

  // Hide the button if the user is on the Contact page
  if (pathname === "/contact" || pathname === "/") return null;

  return (
    <Button btnStyle={btnStyle}>
      <Link href="/contact">get in touch</Link>
    </Button>
  );
}
