import React from 'react';
import Image from 'next/image';


export const Formulario = () => {
    return (
        <div style={{ position: 'relative' }} className="Compra">
            <h1><span style={{ fontSize: 55 }}>COMPRAR INGRESSO</span></h1>
            <form>
                <label for="name"> <span style={{ fontSize: 35 }}></span></label>
                <input type="text" id="name" name="name" placeholder="Nome"></input>
                <label for="name"> <span style={{ fontSize: 35 }}></span></label>
                <input type="text" id="name" name="name" placeholder="Email"></input>
                <label for="name"> <span style={{ fontSize: 35 }}></span></label>
                <input type="text" id="name" name="name" placeholder="Filme preferido"></input>
                <label for="name"> <span style={{ fontSize: 35 }}></span></label>
                <input type="text" id="name" name="name" placeholder="Nivel de coragem"></input>
            </form>
            <button type="button" style={{ position: 'relative', fontSize: 35 }} className="enviar">Enviar</button>



            <div style={{ position: 'relative', left: "55%" }} className="Caveira">
                <img src="/images/caveiraIDE.png" alt="caveiraIDE Image" width="35%" height="auto" />
            </div>
        </div>
    );
};

export default Formulario;