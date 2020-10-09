import React from 'react';
import Header from '../../Components/header/index'
import Footer from '../../Components/footer';
import '../../assets/styles/global.css'
import './style.css';
import Input from '../../Components/input/index'


function Cadastro() {
    return (
        <div>
            <Header description="Faca o seu cadastro" />
            <div className="centro">

            <div className="cadastro">
            <h1>Cadastro</h1>
            <Input type="name" name="nome" id="nome" label="Nome"/>
            <Input type="email" name="email" id="email" label="Email"/>
            <label htmlFor="permissao"> Permissao</label>
            <br/>         
            <select name="permissao" id="permissao" >
                
            <option value="NG">Negar</option>
            <option value="AC">Aceitar</option>
            </select>
            <Input type="password" name="senha" label="Senha"/>
            <Input type="submit"  name="cadastrar" id="cadastrar" label=""/>

            </div>

            </div>
            <Footer/>
        </div>
    );
}
export default Cadastro;