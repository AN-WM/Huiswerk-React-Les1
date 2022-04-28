import React from "react";
import './App.css'

function Tile({title, children, image, alt}) {
    return (
        //Check eerst of het een afbeelding is, zo ja, die weergeven.
        <section>
            {image &&
                <img src={image} alt={alt}/>
            }
                <h2>{title}</h2>
                {children}
        </section>
    )
}

export default Tile;