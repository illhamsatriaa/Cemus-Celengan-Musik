import React from "react";
import logo from '../assets/img/cemus.png'
import HeadPhone from '../assets/img/headphones.svg';
import './css/Login.scss';
import {Link} from "react-router-dom";

class Login extends React.Component{
    render() {
        return(
            <section id="main">
                    <div className="nav-item">
                        <a className="navbar-brand" href="/">Celengan Musik</a>
                    </div>
                    <div className="main-row">
                        <div className="main-row-img">
                            <img className="logo" src={logo} alt=""/>
                        </div>
                        <div className="main-row-text">
                            <h1>Music for everyone</h1>
                            <h2>Dengan Musik, Hidup Lebih Asik</h2>
                            <Link to={"/home"} className="btn">
                                Start Listening
                            </Link>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Login;