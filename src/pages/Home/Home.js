import React from "react";
import { useNavigate } from "react-router-dom";

import HeaderCustom from "../components/HeaderCustom";
import './Home.css';

import Icon1 from '../../assets/Icons/codingIcon.png'
import Icon2 from '../../assets/Icons/developingIcon.png'

import { Card, CardBody, Col, Row } from "react-bootstrap";
import FooterCustom from "../components/FooterCustom";


const HomePage = () => {
    const navigate = useNavigate();

    return (

        <div>
            <HeaderCustom />
            <div className="d-flex align-items-center principal">
                <Card className="border-0 mt-5 mb-3 cardPrincipal">
                    <CardBody style={{ color: "white" }}  className="cardBody">
                        <h1 className="fw-bold">
                            Tecnologia e Desenvolvimento
                        </h1>
                        <h4 className="fw-bold">
                            Equipe especializada e preparada para alavancar seu negócio através da Tecnologia.
                        </h4>
                        <button id="startnowbtn" onClick={() => navigate("/Contato")} className="btn">
                            ENTRE EM CONTATO
                        </button>
                    </CardBody>
                </Card>
            </div>
            <section className="textSection">
                <div className="text-center mt-5" >
                    <h4 className="fw-bold">
                        Converse com quem entende do que você precisa
                    </h4>
                    <p>
                        Na InovaTec, nossa equipe especializada está comprometida em oferecer aos nossos clientes as melhores soluções tecnológicas. Combinamos excelência em infraestrutura de TI com o desenvolvimento de sistemas e aplicativos inovadores, garantindo que sua empresa tenha as ferramentas necessárias para prosperar no mercado competitivo de hoje.
                    </p>
                    <p>
                        Oferecemos serviços que vão desde a criação de landing pages atraentes até automações personalizadas e sistemas eficientes para controle de estoque. Nosso objetivo é proporcionar soluções que otimizem o desempenho do seu negócio, aumentem a produtividade e garantam uma experiência de usuário excepcional.
                    </p>
                    <p>
                        Escolha a InovaTec e experimente a diferença que a tecnologia de ponta pode fazer para sua empresa. Estamos prontos para transformar suas ideias em realidade.
                    </p>
                </div>
            </section>
            <hr />
            <section>
                <Row className="mb-5 mt-5 d-flex justify-content-around">
                    <Col xs={12} md={6} lg={4} className="border-0 shadow-lg cardsPrincipal mb-4 mb-md-0">
                        <img src={Icon1} style={{ maxWidth: "85px" }} />
                        <h3 class="card-text fw-normal mb-3">
                            Desenvolvimento de Sites e LandingPages
                        </h3>
                        <h5>
                            As landing pages são essenciais para converter visitantes em clientes potenciais. Desenvolvemos landing pages visualmente atraentes e otimizadas para alta conversão. Uma landing page bem projetada reduz os custos de aquisição de clientes e impulsiona o crescimento do seu negócio. Nossas landing pages ajudam a atrair e engajar seu público-alvo de maneira eficaz.
                        </h5>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="border-0 shadow-lg cardsPrincipal mb-4 mb-md-0">
                        <img src={Icon2} style={{ maxWidth: "85px" }} />
                        <h3 class="card-text fw-normal mb-3">
                            Automações personalizadas
                        </h3>
                        <h5>
                            Automações personalizadas permitem que sua empresa funcione de maneira mais eficiente, economizando tempo e recursos valiosos. Ciamos soluções de automação sob medida para suas necessidades. Desde a automação de processos repetitivos até a integração de sistemas complexos, permitindo que sua equipe se concentre em tarefas estratégicas e de maior valor, promovendo um crescimento mais rápido e sustentável.
                        </h5>
                    </Col>
                </Row>
                <div className="text-center mb-5">
                    <button id="startnowbtn" onClick={() => navigate("/Servicos")} className="btn">
                        Mais serviços disponiveis
                    </button>
                </div>
            </section>
            <FooterCustom />
        </div>

    )
}

export default HomePage;
