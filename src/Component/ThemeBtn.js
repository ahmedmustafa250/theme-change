import React,{useState} from 'react'
import "./style.css"
import '../App.css'
import '../App.js'

export default function ThemeBtn() {
    
    let [Color,newState]=useState("Light")
   function toogleState(){
       if(Color=="Dark"){
           Color="Light"
           console.log(Color)
           const the=document.getElementById("change")
            newState(function(){
                the.setAttribute('class','main-body')
                return Color}    
            )
       }
       else{
            Color="Dark"
            console.log(Color)
            const the=document.getElementById("change")
            newState(function(){
                the.removeAttribute('class','main-body')
                the.setAttribute('class','main-body-change')
                return Color}    
            )
       }
   } 
    
    return (
        
        <div style={{marginTop:"20px",marginBottom:'-10px',textAlign:'center'}}>
            <button className="toggle" onClick={toogleState}>{Color}</button>
        </div>
    )
}
