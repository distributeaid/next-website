import { ComponentConfig, FieldLabel } from "@measured/puck"
import { Callout } from "@radix-ui/themes"
import * as Icons from '@radix-ui/react-icons'
import { defaultIconPickerFieldProps, IconPickerField } from "../fields/IconPicker"

type Props = {
  icon: string;
  text: string;
  size: "1" | "2" | "3";
  variant: "soft" | "surface" | "outline";
}

export const CalloutConfig: ComponentConfig<Props> = {
  fields: {
    //@ts-ignore
    icon: {
      ...IconPickerField
    },
    text: { type: "text" },
    size: { type: "select", label: "size", options: [{ label: "small", value: "1"}, { label: "regular", value: "2"}, { label: "large", value: "3"}] },
    variant: { type: "select", label: "variant", options: [{ label: "soft", value: "soft"}, { label: "surface", value: "surface"}, { label: "outline", value: "outline"}] },
  },
  defaultProps: {
    ...defaultIconPickerFieldProps,
    text: "Heads up that...",
    size: "2",
    variant: "soft"
  },
  render: ({ icon, text, size, variant }) => {
    return (
      <Callout.Root size={size} variant={variant}>
        {icon && (
          <Callout.Icon>
            {Icons[icon].render({})}
          </Callout.Icon>
        )}
        <Callout.Text>
          {text}
        </Callout.Text>
      </Callout.Root>
    )
  }
}

