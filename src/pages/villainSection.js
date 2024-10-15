import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Import the 'Image' component from the appropriate library

const villains = ["Freddy", "Nekko", "PennyWise", "Jason", "Michael Myers", "Leatherface"];
    const descriptions = {
  "Freddy": 'Freddy Krueger, criado por Wes Craven para "A Nightmare on Elm Street", é um icônico assassino em série que ataca em pesadelos. Ele usa uma luva com lâminas afiadas e tem uma aparência marcante: chapéu fedora, suéter listrado e rosto queimado. Misturando terror psicológico e sobrenatural, Freddy se tornou memorável.',
  "Nekko": 'Neko Robin é uma entidade sobrenatural, sombria e enigmática, que se alimenta do medo e da ansiedade dos candidatos que buscam uma vaga. Durante o processo seletivo, ele espreita nas sombras, observando silenciosamente cada movimento, enquanto coleciona as almas dos que ousam tentar. No entanto, os escolhidos não estão destinados à escuridão eterna, mas sim à salinha, onde serão movidos pelo irresistível café grátis.',
  "PennyWise": 'Pennywise é uma entidade cósmica que se alimenta do medo e surge a cada 27 anos em Derry. Ele assume a forma de um palhaço para atrair vítimas, especialmente crianças, e usa ilusões para explorar seus piores medos. Sádico e manipulador, sua verdadeira forma é uma força maligna além da compreensão humana.', 
  "Jason": 'Jason Voorhees, da série "Friday the 13th", é um assassino icônico criado por Victor Miller. Após se afogar no Lago Crystal, busca vingança usando uma máscara de hóquei e um facão para matar campistas. Sua figura se tornou um símbolo do gênero slasher e um ícone da cultura pop.', 
  "Michael Myers": 'Michael Myers é o vilão da franquia "Halloween", criado por John Carpenter. Um assassino silencioso e implacável, ele usa uma máscara branca e é conhecido por perseguir e matar suas vítimas, especialmente na noite de Halloween. Representa o mal puro, agindo sem motivo claro, tornando-se um ícone do terror.', 
  "Leatherface": 'Leatherface é um homem corpulento que usa uma máscara de pele humana e carrega uma serra elétrica, tornando-o uma figura aterrorizante. Ele vive em uma fazenda isolada com sua família canibal, os Sawyer, que sequestram e matam viajantes. Mentalmente instável, age de forma primitiva e violenta, sendo frequentemente manipulado por outros membros da família.'
}

export function VillainSection() {
    
    const [villain, setVillain] = useState("Freddy");
    const [description, setDescription] = useState(descriptions["Freddy"]);
    useEffect(() => {
        setDescription(descriptions[villain]);
    }, [villain]);
    return (
        <section className="villainSection">
            <h2 className="icones">Os Ícones do Terror</h2>
            <ul className="villainList">
              {villains.map((listedVillain) => (
                <li key={listedVillain}>
                  <a
                    className={`villainCard ${listedVillain === villain ? "selected" : ""}`}
                    href="#"
                    onClick={() => { setVillain(listedVillain) }}
                  >
                    {listedVillain}
                  </a>
                </li>
              ))}
            </ul>
            <div className="villainContent">
              <div>
                <h2>{villain}</h2>
                <p>{description}</p>
              </div>
              <Image
                alt={villain}
                src={`/images/${villain}.png`}
                layout="intrinsic"
                width={608}
                height={618}
              />
            </div>
          </section>
    );
}

export default VillainSection;