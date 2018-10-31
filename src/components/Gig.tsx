import * as React from "react";
import ExternalLink from "../components/ExternalLink";

interface IGig {
  role: string;
  org: string;
  url: string;
}

export default ({ role, org, url }: IGig) => (
  <div>
    {role} at <ExternalLink href={url}>{org}</ExternalLink>
  </div>
);
