import { ContainerPages, NavBarra, Pages, Title } from "./style";

const BarNav = () => {
  return (
    <NavBarra>
      <Title href="/meusite/">MEU PORTIFOLIO</Title>
      <ContainerPages>
        <Pages href="/meusite/">Inicio</Pages>
        <Pages href="/meusite/sobre">Sobre</Pages>
        <Pages href="/meusite/blog">Blog</Pages>
      </ContainerPages>
    </NavBarra>
  );
};
export default BarNav;
