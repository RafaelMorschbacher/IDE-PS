import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

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

const villains = ["Freddy", "Nekko", "PennyWise", "Jason", "Michael Myers", "Leatherface"];
const descriptions = {
  "Freddy": 'Freddy Krueger, criado por Wes Craven para "A Nightmare on Elm Street", é um icônico assassino em série que ataca em pesadelos. Ele usa uma luva com lâminas afiadas e tem uma aparência marcante: chapéu fedora, suéter listrado e rosto queimado. Misturando terror psicológico e sobrenatural, Freddy se tornou memorável.',
  "Nekko": 'Neko Robin é uma entidade sobrenatural, sombria e enigmática, que se alimenta do medo e da ansiedade dos candidatos que buscam uma vaga. Durante o processo seletivo, ele espreita nas sombras, observando silenciosamente cada movimento, enquanto coleciona as almas dos que ousam tentar. No entanto, os escolhidos não estão destinados à escuridão eterna, mas sim à salinha, onde serão movidos pelo irresistível café grátis.',
  "PennyWise": 'Pennywise é uma entidade cósmica que se alimenta do medo e surge a cada 27 anos em Derry. Ele assume a forma de um palhaço para atrair vítimas, especialmente crianças, e usa ilusões para explorar seus piores medos. Sádico e manipulador, sua verdadeira forma é uma força maligna além da compreensão humana.', 
  "Jason": 'Jason Voorhees, da série "Friday the 13th", é um assassino icônico criado por Victor Miller. Após se afogar no Lago Crystal, busca vingança usando uma máscara de hóquei e um facão para matar campistas. Sua figura se tornou um símbolo do gênero slasher e um ícone da cultura pop.', 
  "Michael Myers": 'Michael Myers é o vilão da franquia "Halloween", criado por John Carpenter. Um assassino silencioso e implacável, ele usa uma máscara branca e é conhecido por perseguir e matar suas vítimas, especialmente na noite de Halloween. Representa o mal puro, agindo sem motivo claro, tornando-se um ícone do terror.', 
  "Leatherface": 'Leatherface é um homem corpulento que usa uma máscara de pele humana e carrega uma serra elétrica, tornando-o uma figura aterrorizante. Ele vive em uma fazenda isolada com sua família canibal, os Sawyer, que sequestram e matam viajantes. Mentalmente instável, age de forma primitiva e violenta, sendo frequentemente manipulado por outros membros da família.'
}

export default function Home() {
  
  const [villain, setVillain] = useState("Freddy");
  const [description, setDescription] = useState(descriptions["Freddy"]);
  useEffect(() => {
    setDescription(descriptions[villain]);
  }, [villain]);
  
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
          
          <ul className="villainList">
          {villains.map((listedVillain) => <li key={listedVillain}>
            <a
              className={`villainCard ${listedVillain == villain? "selected" : "" }`} href="#"
              onClick={() => {setVillain(listedVillain)}}
            >{listedVillain}</a></li>
          )}
          </ul>

          <h2>{villain}</h2>
          <p>{description}</p>         
          
        </main>
        <footer className={styles.footer}>
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </>
  );
}
