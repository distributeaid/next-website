import { FieldLabel, Field } from "@measured/puck"
import { Flex, Dialog, Button, IconButton, Text, ScrollArea, Separator } from "@radix-ui/themes"
import * as Icons from '@radix-ui/react-icons'
import { FieldTypes } from "../types/PuckEditorField";

interface IconPickerFieldProps {
  icon: string;
}

export const defaultIconPickerFieldProps: IconPickerFieldProps = {
  icon: ""
}

const renderIconPickerField = ({ field, name, onChange, value }) => {
  const selectedIcon = value === "" ? "None" : Icons[value].render({})

  return (
    <FieldLabel label={field.label || name}>
      <Text as="p">
        Selected icon: {selectedIcon}
      </Text>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button>
            <Icons.MixIcon /> Choose Icon
          </Button>
        </Dialog.Trigger>

        <Dialog.Content>
          <Dialog.Title>Choose An Icon</Dialog.Title>
          <Dialog.Description mb="3">
            Currently selected icon: {selectedIcon}
          </Dialog.Description>

          {value !== "" && (
            <Text as="p" mb="3">
              <Button onClick={() => {onChange("")}}>
                Clear Selection
              </Button>
            </Text>
          )}

          <Separator orientation="horizontal" size="4" mb="3" />

          <ScrollArea type="always" scrollbars="vertical" style={{maxHeight: "256px"}}>
            <Flex direction="row" wrap="wrap" gap="3">
              {Object.entries(Icons).map(([iconName, Icon]) => {
                return (
                  <Dialog.Close>
                    <IconButton variant="soft" onClick={() => {onChange(iconName)}}>
                      <Icon />
                    </IconButton>
                  </Dialog.Close>
                )
              })}
            </Flex>
          </ScrollArea>
        </Dialog.Content>
      </Dialog.Root>
    </FieldLabel>
  )
}

export const IconPickerField = {
  type: FieldTypes.CUSTOM,
  render: renderIconPickerField
} 
