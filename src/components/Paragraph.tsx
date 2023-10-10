import { ComponentConfig } from "@measured/puck";

import { Text } from "@radix-ui/themes"
import { TypeScale, FontWeight, TextAlign } from "../types/RadixTypeography.d"

type Props = {
  text: string;
  size: "2" | "3" | "4" | "5";
  weight: FontWeight;
  align: TextAlign;
}

export const ParagraphConfig: ComponentConfig<Props> = {
  fields: {
    text: { type: "textarea" },
    size: {type: "select", options: [{label: "small", value: TypeScale.TWO}, {label: "regular", value: TypeScale.THREE}, {label: "large", value: TypeScale.FOUR}, {label: "x-large", value: TypeScale.FIVE}]},
    weight: { type: "select", options: Object.values(FontWeight).map((weight) => {return {label: weight, value: weight}})},
    align: { type: "select", options: Object.values(TextAlign).map((align) => {return {label: align, value: align}})},
  },
  defaultProps: {
    text: "Paragraph...",
    size: TypeScale.THREE,
    weight: FontWeight.REGULAR,
    align: TextAlign.LEFT,
  },
  render: ({ text, size, weight, align }) => {
    return (  
      <Text as="p" size={size} weight={weight} align={align}>
        {text}
      </Text>
    )  
  }
}
