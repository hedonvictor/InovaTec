import React from "react";

export default function WhatsAppButton() {
    const phoneNumber = '5514996032304';

    const handleClick = () => {
        const message = "Olá, gostaria de mais informações"
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');

    }

    return (
        <button className="btn btn-success" onClick={handleClick}>
            Enviar mensagem
        </button>
    )
}