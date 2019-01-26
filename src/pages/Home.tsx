import * as React from "react";
import Wedge from "../components/Wedge";
import ExternalLink from "../components/ExternalLink";
import Gig from "../components/Gig";
import config from "../util/config";

export default () => (
  <>
    <Wedge label="next">i'm not sure yet, and that's okay</Wedge>
    <Wedge label="previous">
      <Gig
        role="helping young creatives work together"
        org="daisie"
        url="https://www.daisie.com"
      />
      <Gig
        role="building tools for growth"
        org="deliveroo"
        url="https://deliveroo.co.uk"
      />
      <Gig
        role="personalising children's books"
        org="wonderbly"
        url="https://www.wonderbly.com"
      />
      <Gig role="making kids laugh" org="beano" url="https://www.beano.com" />
      <Gig
        role="opening up the property market"
        org="bricklane"
        url="https://bricklane.com"
      />
      <Gig
        role="reluctantly aiding the tories"
        org="gds"
        url="https://www.gov.uk"
      />
    </Wedge>
    <Wedge label="links">
      <div>
        <ExternalLink href="https://twitter.com/jshmc">twitter</ExternalLink>
      </div>
      <div>
        <ExternalLink href="https://www.instagram.com/mcmillan.jpg/">
          instagram
        </ExternalLink>
      </div>
      <div>
        <ExternalLink href="https://github.com/mcmillan">github</ExternalLink>
      </div>
    </Wedge>
    <Wedge label="contact">
      <div>
        <ExternalLink href="mailto:josh@joshmcmillan.co.uk">
          josh@joshmcmillan.co.uk
        </ExternalLink>
      </div>

      <div>no wallies</div>
    </Wedge>
  </>
);
