import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import VillainSection from "./villainSection";

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



export default function Home() {
  return (
    <>
      <Head>
        <title>IDE PS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          
        <VillainSection/>          
        </main>

        <footer className={styles.footer}>
        <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
            className="footerImage"
              aria-hidden
              src="/images/instagram.png"
              alt="File icon"
              width={40}
              height={40}
            />
            
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
            className="footerImage"
              aria-hidden
              src="/images/linkedin.png"
              alt="File icon"
              width={40}
              height={40}
            />
          </a>
          
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
            className="footerImage"
              aria-hidden
              src="/images/ide.png"
              alt="File icon"
              width={40}
              height={40}
            />
          </a>
        </footer>
      </div>
    </>
  );
}
