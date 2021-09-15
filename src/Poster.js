import React from 'react'
import "./Component/style.css"

export default function Poster(prop) {
    return (
        <div style={{margin:'0 auto'}}>
            <img className="image" src={prop.src}></img>
        </div>
    )
}
