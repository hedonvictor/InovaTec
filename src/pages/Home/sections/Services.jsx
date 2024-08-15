import React from "react";
import HeaderCustom from "../../components/HeaderCustom";

import { useNavigate } from "react-router-dom";

import imgLPage from '../../../assets/ServiceImg/TechWorkspace.jpg'
import imgAutomation from '../../../assets/ServiceImg/automation-software-background.jpg'
import imgShop from '../../../assets/ServiceImg/Shoe Shopping.jpg'
import imgApps from '../../../assets/ServiceImg/smartphone apps.jpg'

import { Card, CardBody,  Col, Container, Row } from "react-bootstrap";
import FooterCustom from "../../components/FooterCustom";

export default function Services() {
    const navigate = useNavigate();

    return (
        <>
            <HeaderCustom />
            <div className="d-flex align-items-center mb-5 principal">
                <Card className="border-0 mt-5 mb-3 cardPrincipal">
                    <CardBody style={{ color: "white" }} className="cardBody">
                        <h1 className="fw-bold">
                            Vamos alavancar sua empresa juntos!
                        </h1>
                        <h4 className="fw-bold">
                            Veja nossos serviços disponiveis e entenda como eles podem alavancar seus resultados.
                        </h4>
                        <button id="startnowbtn" onClick={() => navigate("/Contato")} className="btn">
                            ENTRE EM CONTATO
                        </button>
                    </CardBody>
                </Card>
            </div>
            <section className="serviceSection">
                <Container fluid="md" >
                    <Col className="mt-4 ">
                        <Row className="align-items-center mb-5">
                            <Col xs={12} md={6} lg={4}  className="mb-4 mb-md-0">
                                <img className="cardProjects img-fluid" alt="img" src={imgLPage} />
                            </Col>
                            <Col className="ms-3">
                                <h3>
                                    Sites e LandingPages
                                </h3>
                                <h6 className="greyCustom">
                                    As landing pages são essenciais para converter visitantes em clientes potenciais. Na InovaTec, desenvolvemos landing pages que são visualmente atraentes e otimizadas para alta conversão. Uma landing page bem projetada aumenta significativamente as taxas de conversão, reduz os custos de aquisição de clientes e impulsiona o crescimento do seu negócio. Com design responsivo e bem estruturado, nossas landing pages ajudam a atrair e engajar seu público-alvo de maneira eficaz.
                                </h6>
                            </Col>
                        </Row>
                        <hr />
                        <Row className="d-flex flex-row align-items-center mb-5">
                            <Col className="me-3">
                                <h3>
                                    Desenvolvimento de E-commerce
                                </h3>
                                <h6 className="greyCustom">
                                    Um e-commerce bem estruturado é fundamental para expandir sua presença online e aumentar as vendas. Na InovaTec, desenvolvemos plataformas seguras, escaláveis e otimizadas para SEO. Nossas soluções de e-commerce oferecem uma experiência de compra fluida, com navegação intuitiva e processos simplificados. Invista em uma plataforma de e-commerce que impulsione o crescimento e a visibilidade da sua marca.
                                </h6>
                            </Col>
                            <Col xs={12} md={6} lg={4} className="mb-4 mb-md-0">
                                <img className="cardProjects img-fluid" alt="img" src={imgShop} />
                            </Col>
                        </Row>
                        <hr />
                        <Row className="align-items-center mb-5">
                            <Col xs={12} md={6} lg={4} className="mb-4 mb-md-0">
                                <img className="cardProjects img-fluid" alt="img" src={imgAutomation} />
                            </Col>
                            <Col className="ms-3">
                                <h3>
                                    Sistemas de automação
                                </h3>
                                <h6 className="greyCustom">
                                    Automações personalizadas permitem que sua empresa funcione de maneira mais eficiente, economizando tempo e recursos valiosos. Na InovaTec, criamos soluções de automação sob medida para suas necessidades. Desde a automação de processos repetitivos até a integração de sistemas complexos, nossas soluções aumentam a produtividade e reduzindo. Isso permite que sua equipe se concentre em tarefas estratégicas e de maior valor, promovendo um crescimento mais rápido e sustentável
                                </h6>
                            </Col>
                        </Row>
                        <hr />
                        <Row className="d-flex flex-row align-items-center mb-5">
                            <Col className="me-3">
                                <h3>
                                    Desenvolvimento de aplicativos
                                </h3>
                                <h6 className="greyCustom">
                                    O desenvolvimento de aplicativos personalizados é essencial para atender às necessidades únicas do seu negócio e melhorar a experiência do usuário. Na InovaTec, criamos aplicativos móveis e web que são não apenas funcionais, mas também otimizados para desempenho e usabilidade. Nossos aplicativos são projetados com a melhor experiência de usuário em mente, garantindo que sua empresa se destaque no mercado competitivo.
                                </h6>
                            </Col> 
                            <Col xs={12} md={6} lg={4} className="mb-4 mb-md-0">
                                <img className="cardProjects img-fluid" alt="img" src={imgApps} />
                            </Col>
                        </Row>
                    </Col>
                </Container>
            </section>
            <FooterCustom />
        </>
    )
}


