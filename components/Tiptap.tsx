'use client'

import Blockquote from '@tiptap/extension-blockquote'
import Document from '@tiptap/extension-document'
import HardBreak from '@tiptap/extension-hard-break'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import styles from './Tiptap.module.css'
import './styles.scss'

import { ToolbarRight } from './ToolbarRight'
import { ToolbarUp } from './ToolbarUp'

type Props = {
  onChange: (newContent: string) => void
  content: string
}

const Tiptap = ({ onChange, content }: Props) => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Blockquote,
      Text,
      StarterKit,
      Underline,
      HardBreak.configure({
        HTMLAttributes: {
          class: 'hard-break',
        },
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class: styles.field,
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>EDITOR PAGE</h1>
      <div className={styles.main_block}>
        <div>
          <ToolbarUp editor={editor} />
          <EditorContent editor={editor} />
        </div>
        <ToolbarRight editor={editor} />
      </div>
    </div>
  )
}

export default Tiptap
