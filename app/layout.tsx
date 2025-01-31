'use client';

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import './globals.css';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased mx-auto max-w-screen-lg`}>
          <div className="absolute top-5 right-24">
            <SignedOut>
            </SignedOut>
            {!isHomePage && (
              <SignedIn>
                <UserButton />
              </SignedIn>
            )}
          </div>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
