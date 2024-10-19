import React, { useState } from 'react';
import Image from 'next/image';




export const Formulario = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [favoriteMovie, setFavoriteMovie] = useState("");
    const [courageLevel, setCourageLevel] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        setMessage("Enviado com sucesso!")
        setName("");
        setEmail("");
        setFavoriteMovie("");
        setCourageLevel("");
    }
    return (
        <div style={{ position: 'relative' }} className="Compra" id='ingressos'>
            <h1>COMPRAR INGRESSO</h1>
            <form>
                <label for="name"> <span style={{ fontSize: 35 }}></span></label>
                <input type="text" id="name" name="name" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)}></input>
                <label for="name"> <span style={{ fontSize: 35 }}></span></label>
                <input type="text" id="name" name="name" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label for="name"> <span style={{ fontSize: 35 }}></span></label>
                <input type="text" id="name" name="name" placeholder="Filme preferido" value={favoriteMovie} onChange={(e) => setFavoriteMovie(e.target.value)}></input>
                <label for="name"> <span style={{ fontSize: 35 }}></span></label>
                <input type="text" id="name" name="name" placeholder="Nivel de coragem" value={courageLevel} onChange={(e) => setCourageLevel(e.target.value)}></input>
            </form>
            <button type="button" style={{ position: 'relative', fontSize: 35 }} className="enviar" onClick={handleSubmit}>Enviar</button>

            {message && <p id="message" style={{ color: 'green', fontSize: 24 }}>{message}</p>}


            <div style={{ position: 'relative', left: "55%" }} className="Caveira">
                <img src="/images/caveiraIDE.png" alt="caveiraIDE Image" width="35%" height="auto" />
            </div>
        </div>
    );
};



export default Formulario;