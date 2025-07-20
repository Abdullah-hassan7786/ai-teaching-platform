import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Converso",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{variables: {colorPrimary : '#fe5933'}}}>
      <html lang="en">
        <body className={`${bricolage.variable} antialiased`}>
          <header>
            <Navbar />
            {/*<div className="flex items-center gap-4">*/}
            {/*  <SignedOut>*/}
            {/*    <SignInButton />*/}
            {/*    <SignUpButton />*/}
            {/*  </SignedOut>*/}
            {/*  <SignedIn>*/}
            {/*    <UserButton />*/}
            {/*  </SignedIn>*/}
            {/*</div>*/}
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
