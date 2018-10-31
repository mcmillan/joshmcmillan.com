import * as React from "react";
import styled from "styled-components";

interface IWedge {
  label?: string;
  children?: any;
}

const WedgeWrapper = styled.div`
  padding-bottom: 1rem;
`;

const WedgeLabel = styled.div`
  display: inline-block;
  background-color: #000;
  color: #fff;
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;
`;

const WedgeBody = styled.div``;

export default ({ label, children }: IWedge) => (
  <WedgeWrapper>
    {label && <WedgeLabel>{label}</WedgeLabel>}
    {children && <WedgeBody>{children}</WedgeBody>}
  </WedgeWrapper>
);
