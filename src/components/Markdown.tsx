import '@mdxeditor/editor/style.css'
import { ComponentConfig, FieldLabel } from "@measured/puck"
import {
  MDXEditor,
  toolbarPlugin,
  BoldItalicUnderlineToggles,
  linkPlugin,
  linkDialogPlugin,
  CreateLink,
  quotePlugin,
  BlockTypeSelect,
  listsPlugin,
  ListsToggle,
  thematicBreakPlugin,
  InsertThematicBreak,
  markdownShortcutPlugin
} from "@mdxeditor/editor"
import ReactMarkdown, { Components } from "react-markdown"
import {
  Blockquote,
  Em,
  Link as RadixLink,
  Strong,
  Text
} from "@radix-ui/themes"
import NextLink from 'next/link'

type Props = {
  content: string;
}

const renderMarkdownField = ({ field, name, onChange, value }) => {
  return (
    <>
      <FieldLabel label={field.label || name} />
      <MDXEditor
        markdown={value}
        onChange={onChange}
        plugins={[
          toolbarPlugin({toolbarContents: () => (
            <>
              <BlockTypeSelect />
              <BoldItalicUnderlineToggles />
              <CreateLink />
              <ListsToggle />
              <InsertThematicBreak />
            </>
          )}),
          linkPlugin(),
          linkDialogPlugin(),
          quotePlugin(),
          listsPlugin(),
          thematicBreakPlugin(),
          markdownShortcutPlugin()
        ]}
      />
    </>
  )
}

const components: Components = {
  em: ({children}) => (<Em children={children} />),
  strong: ({children}) => (<Strong children={children} />),

  a: ({children, href, title}) => (
    <RadixLink asChild>
      <NextLink href={href} title={title} children={children} />
    </RadixLink>
  ),

  blockquote: ({children}) => (<Blockquote children={children} />),
  p: ({children}) => (<Text as="p" children={children} />),
}

const render = ({ content }) => {
  return (  
    <ReactMarkdown components={components}>
      { content }
    </ReactMarkdown>
  )  
}

export const MarkdownConfig: ComponentConfig<Props> = {
  fields: {
    content: {
      type: "custom",
      render: renderMarkdownField
    }
  },
  defaultProps: {
    content: "**This is:** Markdown..."
  },
  render
}
