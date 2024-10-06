import Footer from "../../components/Footer";
import BarNav from "../../components/NavBar";
import { Body, Conteudo, Imagem, Paragrafo, TextoParagrafo } from "./styles";

import Foto from "../../assets/img/minhafoto.jpg";

const Home = () => {
  return (
    <Body>
      <BarNav />
      <Conteudo>
        <Imagem src={Foto} alt="Minha Foto" />
        <Paragrafo>
          <TextoParagrafo>Olá,Seja Bem Vindo ao Meu Site</TextoParagrafo>
          <TextoParagrafo>Eu Sou Diego dos Santos Fernandes</TextoParagrafo>
        </Paragrafo>
      </Conteudo>
      <Footer />
    </Body>
  );
};

export default Home;
