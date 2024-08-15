import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/Home";
import Services from "../pages/Home/sections/Services";
import AboutSection from "../pages/Home/sections/About";
import ContactSection from "../pages/Home/sections/Contact";


export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route exact path="/Servicos" element={<Services/>}/>
                    <Route exact path="/Sobre" element={<AboutSection/>}/>
                    <Route exact path="/Contato" element={<ContactSection/>}/>
                    <Route exact path="*" element={<HomePage/>}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}