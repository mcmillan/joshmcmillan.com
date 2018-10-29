import * as React from "react";
import styled from "styled-components";
import Text from "./Text";

export default () => (
  <Footer>
    <Angry>
      <Enraged>Recruiters:</Enraged> I don't want a job. Please do not contact
      me.
    </Angry>
  </Footer>
);

const Footer = styled.footer`
  margin-top: auto;
`;

const Angry = styled(Text)`
  font-size: 1rem;
  color: #ff8888;
`;

const Enraged = styled.span`
  color: #ff6666;
  font-weight: bold;
`;
