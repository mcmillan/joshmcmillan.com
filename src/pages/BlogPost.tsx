import * as React from "react";
import Text from "../components/Text";

interface Props {
  match: { params: { id: string } };
}

export default (props: Props) => {
  try {
    const markdown = require(`../blog/${props.match.params.id}.md`);
    return <Text dangerouslySetInnerHTML={{ __html: markdown }} />;
  } catch (e) {
    return <Text muted>Can't find that article, bud.</Text>;
  }
};
