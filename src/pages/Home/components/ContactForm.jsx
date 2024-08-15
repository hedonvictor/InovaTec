import React from "react";
import { useForm, ValidationError } from '@formspree/react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xanwjoye");
    if (state.succeeded) {
        return <p>Entraremos em contato!</p>;
    }

    return (
        <Form onSubmit={handleSubmit} style={{ maxWidth: "450px", borderRadius: "15px" }} className="border shadow-lg p-3">
            <h5 className="text-center">
                Preencha o formulário e entraremos em contato
            </h5>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label htmlFor="name">Seu nome:</Form.Label>
                <Form.Control
                    id="name"
                    type="name"
                    name="name"
                    placeholder="Nome"
                    required />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Seu e-mail:</Form.Label>
                <Form.Control
                    id="email"
                    type="email"
                    name="email"
                    placeholder="E-mail" />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Telefone para contato:</Form.Label>
                <Form.Control
                    id="phone"
                    type="phone"
                    name="phone"
                    placeholder="Telefone"
                    required />
                <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                />
            </Form.Group>

            <Button
                type="submit"
                disabled={state.submitting}
                variant="primary"
                className="w-100">
                Enviar
            </Button>
        </Form>
    )
}