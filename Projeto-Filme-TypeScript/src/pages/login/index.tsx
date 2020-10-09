import React from 'react';
import Header from '../../Components/header/index';
import Footer from '../../Components/footer';
import '../../assets/styles/global.css'
import './style.css';
import Input from '../../Components/input/index'


function Login() {
    return(
    <div>
		<Header description="Faca o login para acessar a Coletanea " />
        <div className="centro">
            <div className="login">
                <h1>Login</h1>
                <Input type="email" name="email" id="email" label="E-mail"/>
                <Input type="password" name="senha" id="senha" label="Senha"/>
                <Input type="submit"  name="enviar" id="enviar" label=""/>
            </div>
        </div>
        <Footer/>
    </div>
    );
}

export default Login;