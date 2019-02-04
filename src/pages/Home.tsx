import * as React from "react";
import Wedge from "../components/Wedge";
import ExternalLink from "../components/ExternalLink";
import Gig from "../components/Gig";
import config from "../util/config";

export default () => (
  <>
    <Wedge label="now">
      <div>Hi! I'm Josh.</div>
      <div>I'm a software engineer, based in London, UK.</div>
      <div>
        I've got a bunch of experience doing work on backend, frontend, mobile
        and more eclectic projects.
      </div>
    </Wedge>
    <Wedge label="previously">
      <Gig
        role="Building tools to help young creatives work together"
        org="daisie"
        url="https://www.daisie.com"
      />
      <Gig
        role="Creating tools to orchestrate growth"
        org="Deliveroo"
        url="https://deliveroo.co.uk"
      />
      <Gig
        role="Technology for personalised kids books at scale"
        org="Wonderbly"
        url="https://www.wonderbly.com"
      />
      <Gig
        role="Bringing an old-school comic up-to-date"
        org="The Beano"
        url="https://www.beano.com"
      />
      <Gig
        role="Democratising the property market"
        org="Bricklane"
        url="https://bricklane.com"
      />
      <Gig
        role="Creating design patterns for UK Government"
        org="GDS"
        url="https://www.gov.uk"
      />
    </Wedge>
    <Wedge label="links">
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
    <Wedge label="contact">
      <div>
        <ExternalLink href="mailto:josh@joshmcmillan.co.uk">
          josh@joshmcmillan.co.uk
        </ExternalLink>
      </div>
    </Wedge>
  </>
);
