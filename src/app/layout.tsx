// filepath: /Users/raz/Documents/GitHub/speed-build-marketplace-ts/src/app/layout.tsx
import "./globals.css";
import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { GoogleTagManager } from "@next/third-parties/google";
import { getSEOTags } from "../../libs/seo";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
  params?: Record<string, any>;
}

export const metadata = getSEOTags();

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <div data-theme="light">{children}</div>
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
        </body>
      </html>
    </ClerkProvider>
  );
}
