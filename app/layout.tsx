import { bangers, nunito } from "@/fonts";
import { ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jinja the Ninja - Sitter Guide",
  description:
    "The ultimate sitter handbook for Jinja the Ninja — walk times, food tips, vet info, and more. Everything a trusted human needs to care for one legendary dog.",
};

interface RootLayoutProps {
  children: ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${bangers.variable} ${nunito.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
