import React, { useState } from "react";
import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { lightTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { config } from "@/lib/wagmi";
import Navbar from "@/components/navbar";
import { Toaster } from "sonner";
import Providers from "./Providers";
import { Metadata } from "next";
import ClientProviders from "@/components/providers/client-providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caer Finance",
  description: "Cross-chain borrowing platform",
  icons: {
    icon: [
      { url: "/caer.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" }
    ],
    apple: [
      { url: "/caer.png", type: "image/png" }
    ],
  },
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen bg-[#bdcde4] dark:bg-[#bdcde4]`}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
