import { ComponentConfig } from "@measured/puck";

import { Heading } from "@radix-ui/themes"
import { TypeScale, TextAlign } from "../types/RadixTypeography.d"

type Props = {
  title: string;
  as: "h1" | "h2" | "h3";
  align: "left" | "center" | "right";
}

export const HeadingConfig: ComponentConfig<Props> = {
  fields: {
    title: { type: "text" },
    as: { type: "select", label: "type", options: [{ label: "page", value: "h1"}, { label: "section", value: "h2"}, { label: "subsection", value: "h3"}] },
    align: { type: "select", options: Object.values(TextAlign).map((align) => {return {label: align, value: align}})},
  },
  defaultProps: {
    title: "Heading",
    as: "h1",
    align: TextAlign.LEFT,
  },
  render: ({ title, as, align }) => {
    const size = {
      "h1": TypeScale.NINE,
      "h2": TypeScale.EIGHT,
      "h3": TypeScale.SEVEN
    }[as]

    return (  
      <Heading as={as} size={size} align={align}>
        {title}
      </Heading>
    )  
  }
}
