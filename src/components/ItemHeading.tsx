import { ComponentConfig } from "@measured/puck";

import { Heading } from "@radix-ui/themes"
import { TypeScale, TextAlign } from "../types/RadixTypeography.d"

import { defaultItemPickerFieldProps, ItemPickerField } from "../fields/product/ItemPicker"
import { Item } from "../types/product/Item";


type Props = {
  item: Item;
  as: "h1" | "h2" | "h3";
  align: "left" | "center" | "right";
}

export const ItemHeadingConfig: ComponentConfig<Props> = {
  fields: {
    item: { ...ItemPickerField },
    as: { type: "select", label: "type", options: [{ label: "page", value: "h1"}, { label: "section", value: "h2"}, { label: "subsection", value: "h3"}] },
    align: { type: "select", options: Object.values(TextAlign).map((align) => {return {label: align, value: align}})},
  },
  defaultProps: {
    item: defaultItemPickerFieldProps,
    as: "h1",
    align: TextAlign.LEFT,
  },
  render: ({ item, as, align }) => {
    const size = {
      "h1": TypeScale.NINE,
      "h2": TypeScale.EIGHT,
      "h3": TypeScale.SEVEN
    }[as]

    if (!item) {
      return (<>"No item selected"</>)
    }

    return (  
      <Heading as={as} size={size} align={align}>
        {item.name}
      </Heading>
    )  
  }
}
