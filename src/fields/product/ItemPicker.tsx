import { FieldLabel, Field } from "@measured/puck"
import { Select } from "@radix-ui/themes"
import { FieldTypes } from "../../types/PuckEditorField";
import { Item } from "../../types/product/Item";

export const defaultItemPickerFieldProps: Item = {
  name: "",
  age_gender: null,
  size_style: null
}

const fetchProductItemList = async () => {
  // replace with your dev environment Strapi URL
  const itemsResponse = await fetch(`https://1337-distributea-aggregatedp-jf0o07vd6n9.ws-eu109.gitpod.io/api/items`)
  const itemsJson = await itemsResponse.json()

  // flaten items from {id: 1, attributes: {name: "Tent", ...}}
  //              to   {id: 1, name: "Tent", ...}
  const items: Item[] = itemsJson.data.map(({id, attributes}) => {
    return {
      id,
      ...attributes
    }
  })

  return items
}

export const ItemPickerField = {
  type: FieldTypes.EXTERNAL,
  fetchList: fetchProductItemList
}
