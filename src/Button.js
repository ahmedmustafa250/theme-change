import React from 'react'
import "./Component/style.css"
export default function Button(prop) {
    return (
        <div style={{textAlign:'center'}}>
            <button className="btn">{prop.btntext}</button>
        </div>
    )
}
