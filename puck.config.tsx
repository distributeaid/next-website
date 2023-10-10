import type { Config } from "@measured/puck";

import { Heading } from "@radix-ui/themes"

enum Size {
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
  Heading: {
    title: string;
    as: "h1" | "h2" | "h3";
    align: "left" | "center" | "right";
  };
};

export const config: Config<Props> = {
  components: {
    Heading: {
      fields: {
        title: { type: "text" },
        as: { type: "select", label: "type", options: [{ label: "page", value: "h1"}, { label: "section", value: "h2"}, { label: "subsection", value: "h3"}] },
        align: { type: "select", options: [{ label: "left", value: "left"}, { label: "center", value: "center"}, { label: "right", value: "right"}]},
      },
      defaultProps: {
        title: "Heading",
        as: "h1",
        align: "left",
      },
      render: ({ title, as, align }) => {
        const size = {
          "h1": Size.NINE,
          "h2": Size.EIGHT,
          "h3": Size.SEVEN
        }[as]

        return       (  
          <Heading as={as} size={size} align={align}>
            {title}
          </Heading>
        )  
      }
    },
  },
};

export default config;
