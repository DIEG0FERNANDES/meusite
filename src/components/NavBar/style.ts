import styled from "styled-components";

export const NavBarra = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
`;
export const ContainerPages = styled.li`
  /* margin: px; */
  display: inline;
`;
export const Title = styled.a`
  text-decoration: none;
  font-style: none;
  font-family: "bold";
  font-size: 45px;
  margin: 5px;
  color: #22223b;
  &:hover {
    color: #4a4e69;
  }
`;
export const Pages = styled.a`
  text-decoration: none;
  list-style-type: none;
  font-family: "regular";
  font-size: 25px;
  margin: 5px;
  background-color: #9a8c98;
  color: #f2e9e4;
  border-radius: 8px;
  padding: 20px;
  padding-top: 8px;
  padding-bottom: 8px;

  &:hover {
    background-color: #8c7a88;
    color: #ffffff;
  }
`;
