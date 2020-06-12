import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import logo from '../assets/images/logo.svg';
// import { Container, Row} from 'bootstrap';


class NavBar extends React.Component{
    render(){
        return(
        <Router>
            <div className="container">
                <div className="row navbar1">
                <div className="col-2">
                        <img src={logo} alt='logo.svg' className="logo" />
                    </div>
                    <div className="col-1">

                    </div>
                    <div className="col-9">
                        <nav className="navbar sticky-top navbar-expand-lg navbar-light mr-auto justify-content-between">
                        <div class="collapse navbar-collapse">
                            <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link btn-navbar" href="/home"> Beranda <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item1">
                                <a className="nav-link btn-navbar" href="/about"> Tentang Kami </a>
                            </li>
                            <li className="nav-item1">
                                <a className="nav-link btn-navbar" href="/donasi"> Program Donasi </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn-navbar" href="/news"> Berita </a>
                            </li>
                            <li className="nav-item navbtn">
                                <a className="nav-link" href="/login">
                                    <button className="btn1  " type="submit">Masuk</button>
                                </a>
                            </li>
                            <li className="nav-item navbtn">
                                <a className="nav-link" href="/register">
                                    <button className="btn1" type="submit">Daftar</button>
                                </a>
                            </li>
                            </ul>
                        </div>
                        </nav>
                    </div>
                </div>
            </div> 
        </Router>
        );
    }
}

export default NavBar;