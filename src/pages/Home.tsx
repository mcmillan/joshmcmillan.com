import * as React from "react";
import Wedge from "../components/Wedge";
import ExternalLink from "../components/ExternalLink";
import Gig from "../components/Gig";
import { description } from "../../config.json";

export default () => (
  <>
    <Wedge>{description}</Wedge>
    <Wedge label="Currently">
      <Gig role="Figuring it out" org="Daisie" url="https://www.daisie.com" />
    </Wedge>
    <Wedge label="Previously">
      <Gig
        role="Building tools for growth"
        org="Deliveroo"
        url="https://deliveroo.co.uk"
      />
      <Gig
        role="Personalising children's books"
        org="Wonderbly"
        url="https://www.wonderbly.com"
      />
      <Gig role="Making kids laugh" org="Beano" url="https://www.beano.com" />
      <Gig
        role="Opening up the property market"
        org="Bricklane"
        url="https://bricklane.com"
      />
      <Gig
        role="Reluctantly aiding the Tories"
        org="GDS"
        url="https://www.gov.uk"
      />
    </Wedge>
    <Wedge label="Links">
      <div>
        <ExternalLink href="https://twitter.com/jshmc">Twitter</ExternalLink>
      </div>
      <div>
        <ExternalLink href="https://www.instagram.com/mcmillan.jpg/">
          Instagram
        </ExternalLink>
      </div>
      <div>
        <ExternalLink href="https://github.com/mcmillan">GitHub</ExternalLink>
      </div>
    </Wedge>
  </>
);
