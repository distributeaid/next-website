import type { Config } from "@measured/puck";

import { HeadingConfig } from "./src/components/Heading"
import { ParagraphConfig } from "./src/components/Paragraph"

export const config: Config = {
  components: {
    Heading: HeadingConfig,
    Paragraph: ParagraphConfig
  },
};

export default config;
