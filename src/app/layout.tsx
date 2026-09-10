import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thomas Falcon | Applied AI & Full-Stack Engineering",
  description:
    "Senior full-stack engineer and technical lead building reliable applied-AI products, developer platforms, and mission-driven software.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
