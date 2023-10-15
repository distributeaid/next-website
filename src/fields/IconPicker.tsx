import { FieldLabel, Field } from "@measured/puck"
import { Grid, Dialog, Button, IconButton, Text } from "@radix-ui/themes"
import * as Icons from '@radix-ui/react-icons'


interface IconPickerFieldProps {
  icon: string;
}

const defaultIconPickerFieldProps: IconPickerFieldProps = {
  icon: ""
}

const renderIconPickerField = ({ field, name, onChange, value }) => {
  const selectedIcon = value === "" ? "None" : Icons[value]()

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
          <Dialog.Description>
            Currently selected icon: {selectedIcon}
          </Dialog.Description>

          {value !== "" && (
            <Text as="p">
              <Button onClick={() => {onChange("")}}>
                Clear Selection
              </Button>
            </Text>
          )}

          <Grid>
            {Object.entries(Icons).map(([iconName, Icon]) => {
              return (
                <Dialog.Close>
                  <IconButton onClick={() => {onChange(iconName)}}>
                    <Icon />
                  </IconButton>
                </Dialog.Close>
              )
            })}
          </Grid>
        </Dialog.Content>
      </Dialog.Root>
    </FieldLabel>
  )
}

export const IconPickerField: Field = {
  type: "custom",
  render: renderIconPickerField
} 
