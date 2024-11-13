'use client'

import Blockquote from '@tiptap/extension-blockquote'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import styles from './Tiptap.module.css'
import './styles.scss'

import { Toolbar } from './Toolbar'

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
      // Blockquote.configure({
      //   HTMLAttributes: {
      //     class: styles.blockquote,
      //   },
      // }),
      Text,
      StarterKit,
      Underline,
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
    <>
      <h1 className={styles.heading}>EDITOR PAGE</h1>
      <div>
        <Toolbar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </>
  )
}

export default Tiptap
