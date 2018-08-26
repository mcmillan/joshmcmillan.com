import styled from "styled-components";

export default styled.span<{ muted?: boolean }>`
  font-family: "GT Eesti", sans-serif;
  font-size: 1.25rem;
  line-height: 1.5;
  color: ${props => (props.muted ? "#999" : "#fff")};
`;
