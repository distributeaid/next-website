import type { Config } from "@measured/puck";

import { FlexConfig } from "./src/components/Flex"
import { HeadingConfig } from "./src/components/Heading"
import { ItemHeadingConfig } from "./src/components/ItemHeading"
import { MarkdownConfig } from "./src/components/Markdown"
import { ParagraphConfig } from "./src/components/Paragraph"
import { BlockquoteConfig } from "./src/components/Blockquote"
import { CalloutConfig } from "./src/components/Callout"

export const config: Config = {
  components: {
    Flex: FlexConfig,
    Heading: HeadingConfig,
    ItemHeading: ItemHeadingConfig,
    Markdown: MarkdownConfig,
    Paragraph: ParagraphConfig,
    Blockquote: BlockquoteConfig,
    Callout: CalloutConfig
  },
};

export default config;
