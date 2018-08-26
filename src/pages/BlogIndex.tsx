import * as React from "react";
import { Fragment } from "react";
import BlogPostSummary from "../components/BlogPostSummary";
import Preamble from "../components/Preamble";

export default () => (
  <Fragment>
    <Preamble>Here's all the shit I've written!</Preamble>
    <BlogPostSummary
      id="hello-world"
      title="hello world"
      description="a test post"
    />
  </Fragment>
);
