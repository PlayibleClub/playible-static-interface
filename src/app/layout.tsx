import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Playible - Next Generation of Sports Collectibles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/png" sizes="32x32" href="/images/icon.png"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
