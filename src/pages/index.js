import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import VillainSection from "./villainSection";
import Formulario from "./Formulario";
import Navbar from "./navbar";
import Banner from "./banner";
import Cartazes from "./cartazes";

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

      <Navbar />
      <Banner />
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <Cartazes />
          <VillainSection />
          <Formulario />
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
          <p>
            CineIDE © Todos os direitos reservados. <br />
            Termos de Uso  |  Politica de Privacidade  |  Política de Cookies
          </p>
        </footer>
      </div>
    </>
  );
}
