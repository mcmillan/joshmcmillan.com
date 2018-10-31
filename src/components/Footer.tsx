import * as React from "react";
import styled from "styled-components";

export default () => (
  <Footer>
    <SeriouslyRecruitersPleasePayAttention>
      Recruiters:
    </SeriouslyRecruitersPleasePayAttention>
    I don't want a job. Please do not contact me.
  </Footer>
);

const Footer = styled.footer`
  margin-top: auto;
  font-size: 0.8rem;
  color: #ff8888;
`;

const SeriouslyRecruitersPleasePayAttention = styled.strong`
  color: #ff6666;
`;
