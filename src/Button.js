import React from "react";
import './App.css'

function Button({buttonText, disabled}) {
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={() => console.log(buttonText)}
        >
            {buttonText}
        </button>
    )
}

export default Button;