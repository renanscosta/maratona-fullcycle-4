import React from 'react';
import { Link } from 'react-router-dom'
import css from "./user.module.css";

export default function Help() {
    return (
        <div className={css.a}>
            <p style={{ color: "#ffcd01", marginTop: "20px", textAlign: "center", fontSize: "1.2rem" }}><Link to="/users">Ir para a página users...</Link></p>
        </div>
    )
}
