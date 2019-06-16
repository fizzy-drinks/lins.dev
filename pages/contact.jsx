import Page from '../components/Page'
import PageHeader from '../components/PageHeader'
import WidthContainer from '../components/WidthContainer'

const Contact = () =>
  <Page title='Contato'>
    <PageHeader>
      <PageHeader.Title>
        <PageHeader.Title.Highlight>contato</PageHeader.Title.Highlight>
      </PageHeader.Title>
      <PageHeader.Sub>Vamos tomar um café? Adoraria ouvir o que você tem a dizer.</PageHeader.Sub>
    </PageHeader>
    <WidthContainer>
      <article>
        <h3>Contate-me por e-mail.</h3>
        <p>
          É tradicional e prático.
          Meu endereço principal é <a href='mailto:gabriel@lins.dev'>gabriel@lins.dev</a>,
          e normalmente respondo a todas as mensagens dentro de um dia.
        </p>
      </article>
    </WidthContainer>
    <WidthContainer>
      <article>
        <h3>Me telefone ou envie uma mensagem.</h3>
        <p>
          Eu uso Telegram e WhatsApp rotineiramente e sempre atendo ou
          retorno ligações. <a href='tel:+5513981523054'>Me adicione</a> e entre em contato!
        </p>
      </article>
    </WidthContainer>
  </Page>

export default Contact
