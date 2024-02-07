import { ComponentConfig, FieldLabel } from "@measured/puck"
import { Avatar } from "@radix-ui/themes"

type Props = {
  size: "1" | "2" | "3";
  variant: "soft" | "solid";
  radius: "none" | "large" | "full";
  fallback: string;
}

export const AvatarConfig: ComponentConfig<Props> = {
  fields: {
    size: { type: "select", label: "size", options: [{ label: "small", value: "1"}, { label: "regular", value: "2"}, { label: "large", value: "3"}] },
    variant: { type: "select", label: "variant", options: [{ label: "soft", value: "soft"}, { label: "solid", value: "solid"}] },
    radius: { type: "select", label: "radius", options: [{ label: "none", value: "none"}, {label:"large", value: "large"}, {label: "full", value: "full"}] },
    fallback: { type: "text"}
  },
  defaultProps: {
    size: "3",
    variant: "soft",
    radius: "none",
    fallback: "teststring"
  },
  render: ({ size, variant, radius, fallback }) => {
    return (
      <Avatar 
      src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
      size={size} 
      variant={variant}
      radius={radius}
      fallback={fallback}
      />

    )

  }


}