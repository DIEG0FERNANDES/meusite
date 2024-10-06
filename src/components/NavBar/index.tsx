import { ContainerPages, NavBarra, Pages, Title } from "./style";

const BarNav = () => {
  return (
    <NavBarra>
      <Title href="/">MEU PORTIFOLIO</Title>
      <ContainerPages>
        <Pages href="/">Inicio</Pages>
        <Pages href="/sobre">Sobre</Pages>
        <Pages href="/blog">Blog</Pages>
      </ContainerPages>
    </NavBarra>
  );
};
export default BarNav;
