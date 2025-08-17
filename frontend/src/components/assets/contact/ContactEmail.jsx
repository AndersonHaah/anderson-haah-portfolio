import React from 'react';

export default function EmailLink() {
  const email = 'andersonhaah1@gmail.com';
  const subject = 'Contato pelo portfólio';
  const body = 'Olá, gostaria de saber mais sobre seus projetos.';

  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <a
      href={mailtoUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: '#974ef7', textDecoration: 'none' }}
    >
      Andersonhaah1@gmail.com
    </a>
  );
}
