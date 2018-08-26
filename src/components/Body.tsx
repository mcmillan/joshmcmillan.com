import * as React from "react";
import styled from "styled-components";

export default ({ children }: React.HTMLProps<HTMLDivElement>) => (
  <Body>{children}</Body>
);

const Body = styled.div`
  padding-top: 1rem;
`;
