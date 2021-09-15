import React from 'react'
import "./style.css"

export default function content(prop) {
    return (
        <div>
            <p className="content-para">{prop.textContent} </p>
            <p className="content-para">{prop.textContent1} </p>
        </div>
    )
}
