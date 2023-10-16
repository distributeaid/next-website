import { ComponentConfig, DropZone } from "@measured/puck";

import { Flex, flexPropDefs } from "@radix-ui/themes"

enum FlexDirection {
  ROW = "row",
  COL = "column"
}

enum FlexAlign {
  START = "start",
  CENTER = "center",
  END = "end",
  BASELINE = "baseline",
  STRETCH = "stretch"
}

enum FlexJustify {
  START = "start",
  CENTER = "center",
  END = "end",
  BETWEEN = "between"
}

enum FlexWrap {
  NOWRAP = "nowrap",
  WRAP = "wrap"
}

enum FlexGap {
  ZERO = "0",
  ONE = "1",
  TWO = "2",
  THREE = "3",
  FOUR = "4",
  FIVE = "5",
  SIX = "6",
  SEVEN = "7",
  EIGHT = "8",
  NINE = "9"
}

type Props = {
  direction: FlexDirection;
  align: FlexAlign
  justify: FlexJustify
  wrap: FlexWrap
  gap: FlexGap
}

export const FlexConfig: ComponentConfig<Props> = {
  fields: {
    direction: { type: "select", options: Object.values(FlexDirection).map((option) => {return {label: option, value: option}})},
    align: { type: "select", options: Object.values(FlexAlign).map((option) => {return {label: option, value: option}})},
    justify: { type: "select", options: Object.values(FlexJustify).map((option) => {return {label: option, value: option}})},
    wrap: { type: "select", options: Object.values(FlexWrap).map((option) => {return {label: option, value: option}})},
    gap: { type: "select", options: Object.values(FlexGap).map((option) => {return {label: option, value: option}})},
  },
  defaultProps: {
    direction: FlexDirection.COL,
    align: FlexAlign.BASELINE,
    justify: FlexJustify.START,
    wrap: FlexWrap.WRAP,
    gap: FlexGap.THREE
  },
  render: ({ ...props }) => {
    return (  
      <Flex {...props}>
        <DropZone zone="children" />
      </Flex>
    )  
  }
}