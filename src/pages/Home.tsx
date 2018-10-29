import * as React from "react";
import styled from "styled-components";
import Text from "../components/Text";
import ExternalLink from "../components/ExternalLink";

export default () => (
  <>
    <Segment>
      Now
      <br />
      <ExternalLink href="https://www.daisie.com">Daisie</ExternalLink>
    </Segment>
    <Segment>
      Before
      <br />
      <ExternalLink href="https://deliveroo.co.uk">Deliveroo</ExternalLink>
      <br />
      <ExternalLink href="https://www.gov.uk">GDS</ExternalLink>
      <br />
      <ExternalLink href="https://www.beano.com">Beano</ExternalLink>
      <br />
      <ExternalLink href="https://www.wonderbly.com">Wonderbly</ExternalLink>
      <br />
      <ExternalLink href="https://bricklane.com">Bricklane</ExternalLink>
    </Segment>
    <Segment>
      Links
      <br />
      <ExternalLink href="https://twitter.com/jshmc">Twitter</ExternalLink>
      <br />
      <ExternalLink href="https://www.instagram.com/mcmillan.jpg/">
        Instagram
      </ExternalLink>
      <br />
      <ExternalLink href="https://github.com/mcmillan">GitHub</ExternalLink>
    </Segment>
  </>
);

const Segment = styled(Text)`
  display: block;
  margin-bottom: 1rem;
`;
