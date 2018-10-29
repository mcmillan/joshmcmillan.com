import * as React from "react";
import styled from "styled-components";
import Text from "../components/Text";
import ExternalLink from "../components/ExternalLink";
import { description } from "../../config.json";

export default () => (
  <>
    <Segment>{description}</Segment>
    <Segment>
      <Subtitle>Currently</Subtitle>
      <Gig
        role="Consolidating power"
        org="Daisie"
        url="https://www.daisie.com"
      />
    </Segment>
    <Segment>
      <Subtitle>Previously</Subtitle>
      <Gig
        role="Tools for growth"
        org="Deliveroo"
        url="https://deliveroo.co.uk"
      />
      <Gig role="Making kids laugh" org="Beano" url="https://www.beano.com" />
      <Gig
        role="Pleasing our alien overlords"
        org="GDS"
        url="https://www.gov.uk"
      />
      <Gig
        role="Creating books for kids"
        org="Wonderbly"
        url="https://www.wonderbly.com"
      />
      <Gig role="Property ISAs" org="Bricklane" url="https://bricklane.com" />
    </Segment>
    <Segment>
      <Subtitle>Links</Subtitle>
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

const Subtitle = styled.div`
  display: inline-block;
  background-color: #000;
  color: #fff;
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;
`;

interface GigProps {
  role: string;
  org: string;
  url: string;
}

const Gig = ({ role, org, url }: GigProps) => (
  <div>
    {role} at <ExternalLink href={url}>{org}</ExternalLink>
  </div>
);
