import React from "react";
import Contacts from "./Contacts";

export default function Footer(){
    return(
        <div className="footer">
            <Contacts></Contacts>
            <div>
                Criado por: <a className="linkrd" href="https://page-three-orcin.vercel.app/" target="_blank">Diego Rodrigues</a>
            </div>
        </div>
    )
}