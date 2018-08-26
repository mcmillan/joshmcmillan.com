import * as React from "react";
import Text from "../components/Text";
import MarkdownWrapper from "../components/MarkdownWrapper";

interface Props {
  match: { params: { id: string } };
}

export default (props: Props) => {
  try {
    const markdown = require(`../blog/${props.match.params.id}.md`);
    return <MarkdownWrapper dangerouslySetInnerHTML={{ __html: markdown }} />;
  } catch (e) {
    return <Text>Can't find that article, bud.</Text>;
  }
};
