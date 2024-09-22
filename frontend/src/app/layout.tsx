/* eslint-disable @typescript-eslint/no-unused-vars */
// "use client"

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import '@fontsource/luckiest-guy'; // Add this line

import { headers } from 'next/headers'

import { cookieToInitialState } from 'wagmi'
import { config } from '@/config'
import AppKitProvider from '@/context/index'

// FONTS
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// METADATA
const metadata: Metadata = {
  title: "Moraq Gaming",
  description: "ETHSINGAPORE",
};

// MAIN LAYOUT
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">
      <Head>
        <title>Moraq Gamings</title>
        <meta name="description" content="Eth Online 2024" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Web3Modal>{children}</Web3Modal> */}
        <AppKitProvider initialState={initialState}>{children}</AppKitProvider>

      </body>
    </html>
  );
}





