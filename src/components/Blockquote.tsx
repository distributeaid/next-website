import { ComponentConfig } from "@measured/puck";

import { Blockquote } from "@radix-ui/themes"
import { TypeScale, FontWeight } from "../types/RadixTypeography.d"

type Props = {
  text: string;
  size: "3" | "4" | "5" | "6";
  weight: FontWeight;
}

export const BlockquoteConfig: ComponentConfig<Props> = {
  fields: {
    text: { type: "textarea" },
    size: {type: "select", options: [{label: "small", value: TypeScale.THREE}, {label: "regular", value: TypeScale.FOUR}, {label: "large", value: TypeScale.FIVE}, {label: "x-large", value: TypeScale.SIX}]},
    weight: { type: "select", options: Object.values(FontWeight).map((weight) => {return {label: weight, value: weight}})},
  },
  defaultProps: {
    text: "Blockquote me I'm famous!",
    size: TypeScale.FOUR,
    weight: FontWeight.REGULAR,
  },
  render: ({ text, size, weight }) => {
    return (  
      <Blockquote size={size} weight={weight}>
        {text}
      </Blockquote>
    )  
  }
}

