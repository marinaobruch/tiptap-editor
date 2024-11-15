'use client'

import Blockquote from '@tiptap/extension-blockquote'
import BulletList from '@tiptap/extension-bullet-list'
import Document from '@tiptap/extension-document'
import FontFamily from '@tiptap/extension-font-family'
import HardBreak from '@tiptap/extension-hard-break'
import ListItem from '@tiptap/extension-list-item'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
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
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      ListItem,
      BulletList,
      StarterKit,
      Underline,
      HardBreak.configure({
        HTMLAttributes: {
          class: 'hard-break',
        },
      }),
      FontFamily,
      TextStyle,
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
          <div className={styles['editor-wrapper']}>
            <EditorContent editor={editor} />
          </div>
        </div>
        <ToolbarRight editor={editor} />
      </div>
    </div>
  )
}

export default Tiptap
