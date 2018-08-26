import * as React from "react";
import { Fragment } from "react";
import BlogPostSummary from "../components/BlogPostSummary";

export default () => (
  <Fragment>
    <BlogPostSummary
      id="hello-world"
      title="hello world"
      description="a test post"
    />
  </Fragment>
);
