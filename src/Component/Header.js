import React from 'react'
import "./style.css"

export default function Header(prop) {
    return (
        <div>
            <h1 className="head">{prop.text}</h1>
            <h1 className="head1">{prop.text1}</h1>
        </div>
    )
}
