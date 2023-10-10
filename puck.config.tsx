import type { Config } from "@measured/puck";

import { HeadingConfig } from "./src/components/Heading"
import { ParagraphConfig } from "./src/components/Paragraph"
import { MarkdownConfig } from "./src/components/Markdown"

export const config: Config = {
  components: {
    Heading: HeadingConfig,
    Paragraph: ParagraphConfig,
    Markdown: MarkdownConfig
  },
};

export default config;
