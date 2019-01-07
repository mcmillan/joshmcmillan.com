import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import config from "../util/config";

export default () => (
  <Header>
    <Ident>{config.title}</Ident>
  </Header>
);

const Header = styled.header`
  display: flex;
  align-items: center;
`;

const Ident = styled(Link).attrs({ to: "/" })`
  font-family: "GT Super";
  font-weight: bold;
  font-size: 2.5rem;
  color: #000;
  text-decoration: none;
`;
