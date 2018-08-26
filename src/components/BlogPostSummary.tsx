import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { blogPath } from "../util/paths";

interface Props {
  id: string;
  title: string;
  description: string;
}

export default (props: Props) => (
  <Summary to={blogPath(props.id)}>
    <Title>{props.title}</Title>
    <Description>{props.description}</Description>
  </Summary>
);

const Summary = styled(Link)`
  padding-bottom: 1rem;
  display: block;
  font-family: "GT Eesti", sans-serif;
  font-size: 1.25rem;
  line-height: 1.5;
  color: #999;
  text-decoration: none;
`;

const Title = styled.div`
  color: #fff;
  font-weight: bold;
`;

const Description = styled.div``;
