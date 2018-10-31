import * as React from "react";
import IGig from "../interfaces/IGig";
import ExternalLink from "../components/ExternalLink";

export default ({ role, org, url }: IGig) => (
  <div>
    {role} at <ExternalLink href={url}>{org}</ExternalLink>
  </div>
);
