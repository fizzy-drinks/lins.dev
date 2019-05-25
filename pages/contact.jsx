import Page from '../components/Page'

const Contact = () =>
  <Page>
    <h2>Vamos tomar um café.</h2>
    <p>Adoraria ouvir o que você tem a dizer. Essas são as formas pelas quais podemos conversar:</p>
    <article>
      <h3>Contate-me por e-mail.</h3>
      <p>
        É tradicional e prático.
        Meu endereço principal é <a href='mailto:gabriel.chiconi@gmail.com'>gabriel.chiconi@gmail.com</a>,
        e normalmente respondo a todas as mensagens dentro de um dia.
      </p>
    </article>
    <article>
      <h3>Me telefone ou envie uma mensagem.</h3>
      <p>
        Eu uso Telegram e WhatsApp rotineiramente e sempre atendo ou
        retorno ligações. <a href='tel:+5513981523054'>Me adicione</a> e entre em contato!
      </p>
    </article>
  </Page>

export default Contact
