import React from "react";
import './App.css'

function Tile({title, text1, text2, image, alt}) {
    //Check of er een afbeelding is
    if (image === '') {
        //Wanneer het een text-tegel is:
        //Check of er één of twee paragrafen zijn
        if (text2 === '') {
            //Wanneer het één paragraaf is:
            return (
                <section>
                    <h2>{title}</h2>
                    <p>{text1}</p>
                </section>
            )
            //Wanneer het twee paragrafen zijn:
        } else {
            return (
                <section>
                    <h2>{title}</h2>
                    <p>{text1}</p>
                    <p>{text2}</p>
                </section>
            )
        }
    //Wanneer het een afbeelding-tegel is:
    } else {
        return (
            <section>
                <img src={image} alt={alt}/>
            </section>
        )
    }
}

export default Tile;