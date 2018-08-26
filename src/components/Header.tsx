import * as React from "react";
import styled from "styled-components";

export default () => (
  <Header>
    <Ident>Josh McMillan</Ident>
  </Header>
);

const Header = styled.header`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 2px #222 solid;
`;

const Ident = styled.div`
  font-family: "GT Super";
  font-weight: bold;
  font-size: 2.5rem;
  color: #fff;
`;
