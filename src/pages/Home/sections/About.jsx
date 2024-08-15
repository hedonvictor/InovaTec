import React from "react";
import HeaderCustom from "../../components/HeaderCustom";

import enterpriseImg from '../../../assets/Business Meeting Discussion.jpg'
import enterpriseImg2 from '../../../assets/Data Analysis Meeting.jpg'

import { Col, Row } from "react-bootstrap";
import FooterCustom from "../../components/FooterCustom";

export default function AboutSection() {
    return (
        <>
            <HeaderCustom />
            <section>
                <Row className="d-flex align-items-center mb-5 mt-5">
                    <Col className="textAbout">
                        <h3 className="fw-bold">
                            InovaTec Soluções em tecnologia
                        </h3>
                        <h5 className="mt-3 greyCustom">
                            Na Inovatec acreditamos que o objetivo da tecnologia, é permitir maior competitividade ao mercado, aumentando a eficiência dos negócios e tornando as experiências mais dinâmicas.
                            <br />
                            A proposta é oferecer ao cliente a mais completa rede de serviços especializados, dentre eles consultoria, desenvolvimento de sites, apps e sistemas, suporte, soluções em nuvem, tudo que vise o crescimento da empresa como um todo.
                            <br />
                            Na InoavTec, o serviço é feito da forma mais personalizada possível, levando em consideração as particularidades de cada negócio e a satisfação do cliente.
                        </h5>
                    </Col>
                    <Col xs={12} md={6} lg={4}  className="mb-4 mb-md-0">
                        <img alt="enterprise" src={enterpriseImg} className="enterpriseImg img-fluid" />
                    </Col>
                </Row>
                <hr/>
                <Row className="d-flex align-items-center mb-5 mt-5">
                    <Col xs={12} md={6} lg={4}  className="mb-4 mb-md-0">
                        <img alt="enterprise" src={enterpriseImg2} className="enterpriseImg img-fluid" />
                    </Col>
                    <Col className="text-center">
                        <h3 className="fw-bold mb-4">
                            Missão, Visão e Valores
                        </h3>
                        <h4 className="greenCustom">
                            Missão
                        </h4>
                        <h6 className="greyCustom">
                            Potencializar o crescimento e resultado de nossos clientes através da tecnologia e inovação.
                        </h6>
                        <h4 className="greenCustom">
                            Visão
                        </h4>
                        <h6 className="greyCustom">
                            Atuar como parceiro de excelência na busca de soluções em tecnologia, ampliando a a participação no mercado
                        </h6>
                        <h4 className="greenCustom">
                            Valores
                        </h4>
                        <h6 className="greyCustom">
                            Comprometimento, entrega, satisfação mútua e energia.
                        </h6>
                    </Col>
                </Row>
            </section>

            <FooterCustom />
        </>
    )
}