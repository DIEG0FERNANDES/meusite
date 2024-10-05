import Footer from "../../components/Footer";
import BarNav from "../../components/NavBar";
import { Body, Conteudo } from "./styles";

const Home = () => {
  return (
    <Body>
      <BarNav />
      <Conteudo>
        <p>
          Olá,Seja Bem Vindo ao Meu Portifólio Eu Sou Diego dos Santos Fernandes
        </p>
      </Conteudo>
      <Footer />
    </Body>
  );
};

export default Home;
