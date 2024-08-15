import React from "react";

import logoImg from '../../assets/Icons/LogoInovaTec.png'

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Navbar, Nav, Container } from 'react-bootstrap';

export default function HeaderCustom() {
    const navigate = useNavigate();

    const [activeLink, setActiveLink] = useState(window.location.pathname);

    const handleClick = (path) => {
        setActiveLink(path);
        navigate(path);
    }

    return (
        <header>
            <Navbar expand="lg" className="`p-3 headerNavbar">
                <Container>
                <Navbar.Brand href="#home" className="navbarBrand">
                    <img src={logoImg} alt="Logo Inovatec" className="logoHeader" />
                    InovaTec
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <ul className="navbar-nav">
                            <li className="nav nav-item me-4" >
                                <button
                                    onClick={() => handleClick("/")}
                                    className={`nav-link ${activeLink === "/" ? "active-link" : ""}`}>
                                    Home
                                </button>
                            </li>
                            <li className="nav nav-item me-4">
                                <button
                                    onClick={() => handleClick("/Servicos")}
                                    className={`nav-link ${activeLink === "/Servicos" ? "active-link" : ""}`}>
                                    Nossos Serviços
                                </button>
                            </li>
                            <li className="nav nav-item me-4">
                                <button
                                    onClick={() => handleClick("/Sobre")}
                                    className={`nav-link ${activeLink === "/Sobre" ? "active-link" : ""}`}>
                                    Quem somos
                                </button>
                            </li>
                            <li className="nav nav-item me-4">
                                <button
                                    onClick={() => handleClick("/Contato")}
                                    className={`nav-link ${activeLink === "/Contato" ? "active-link" : ""}`} >
                                    Contato
                                </button>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    )
}




