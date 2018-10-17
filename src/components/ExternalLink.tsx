import styled from "styled-components";

export default styled.a.attrs({ target: "_blank" })`
  color: #000;
  text-decoration: none;
  border-bottom: 1px rgba(0, 0, 0, 0.5) solid;
  transition: 0.1s ease all;

  &:hover {
    border-bottom-color: #000;
  }
`;
