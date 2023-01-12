import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"


const Login = () => {
    const handleSubmit = (e) => {
       e.preventDefault();
       
    }

    return (
        <div className="content">
            <form className='form' onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" placeholder="usuario@gmail.com"/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" placeholder="......" />
                </label>
                <div style={{ marginTop: '25%' }}>
                    <Link to="/Inicio">
                    <button className="button" type="submit">Ingresar</button>
                    </Link>
                </div>
            </form>
        </div>
    )
};

export default Login;

