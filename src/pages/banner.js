import React from 'react';
import Image from 'next/image';

export const Banner = () => {
    return (
        <div style={{ position: 'relative' }} className="banner">
            <img src="/images/banner.png" alt="Banner Image" width="100%" height="auto" />
            <div style={{ position: 'absolute', bottom: "10%", right: "10%" }}>
            <h1 >C<span style={{fontSize: 60}}>INE</span>IDE</h1>
            <p>Clássicos do terror, onde o pavor nunca sai de cena</p>
            </div>
           
        </div>
    );
};

export default Banner;