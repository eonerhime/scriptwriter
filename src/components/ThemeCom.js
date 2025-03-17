"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="dark:bg-primary-500 dark:text-primary-50 min-h-screen select-none transition-colors duration-300 px-8">
        {children}
      </div>
    </ThemeProvider>
  );
}
