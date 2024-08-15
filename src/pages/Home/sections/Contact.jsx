import React from "react";

import HeaderCustom from "../../components/HeaderCustom";
import WhatsAppButton from "../components/WhatsAppButton";

import { Col, Row, Card, CardBody } from "react-bootstrap";

import FooterCustom from "../../components/FooterCustom";
import ContactForm from "../components/ContactForm";

export default function ContactSection() {
    return (
        <>
            <HeaderCustom />
            <section className="mt-5 textContact">
                <h1 className="fw-bold">
                    Estamos prontos para
                    <br />
                    atender suas necessidades.
                </h1>
                <Row className="mt-5 d-flex justify-content-around">
                    <Col style={{ maxWidth: "500px" }}>
                        <h5 className="fw-bold">
                            Como podemos te ajudar?
                        </h5>
                        <h6 className="greyCustom ms-2">
                        <br />
                            Sua empresa está precisando de uma colocação digital? Sistemas de automação? Ou desenvolvimento do seu aplicativo para alavancar o seu negócio? Conte com nossa equipe de especialistas.
                            <br /><br />
                            Nosso time de atendimento está pronto para receber o seu contato, entender suas necessidades e direcioná-lo a nossa equipe de comercial.
                        </h6>
                    </Col>
                    <ContactForm/>
                </Row>

            </section>
            <div id="contactWpp" className="d-flex align-items-center justify-content-center mt-5">
                <Card className="border-0 mt-5 mb-3 text-center" id="cardWpp">
                    <CardBody style={{ color: "white" }} >
                        <h2 className="fw-bold">
                            Se preferir, Contate-nos pelo Whatsapp
                        </h2>
                        <WhatsAppButton/>
                    </CardBody>
                </Card>
            </div>
            <FooterCustom />
        </>
    )
}