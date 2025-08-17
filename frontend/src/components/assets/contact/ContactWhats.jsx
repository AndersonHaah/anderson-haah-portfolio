import React from 'react';

export default function WhatsappLink() {
  const phoneNumber = '+5585981859741';
  const message = 'Olá, quero saber mais sobre seu portfólio!';
  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: '#974ef7', textDecoration: 'none' }}
    >
      (85) 98185-9741
    </a>
  );
}
