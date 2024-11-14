'use client'

import { type Editor } from '@tiptap/react'
import cn from 'classnames'
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Minus,
  Redo,
  Strikethrough,
  TextQuote,
  Underline,
  Undo,
  WrapText,
} from 'lucide-react'

import styles from './Tiptap.module.css'

type Props = {
  editor: Editor | null
}

export const ToolbarUp = ({ editor }: Props) => {
  if (!editor) {
    return null
  }

  return (
    <div className={styles.control_group}>
      <div className={styles.button_group}>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          className={styles.non_active}
        >
          <Undo />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          className={styles.non_active}
        >
          <Redo />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={
            editor.isActive('bold') ? styles.active : styles.non_active
          }
        >
          <Bold />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={
            editor.isActive('italic') ? styles.active : styles.non_active
          }
        >
          <Italic />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={
            editor.isActive('strike') ? styles.active : styles.non_active
          }
        >
          <Strikethrough />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          className={
            editor.isActive('underline') ? styles.active : styles.non_active
          }
        >
          <Underline />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={
            editor.isActive('bulletList') ? styles.active : styles.non_active
          }
        >
          <List />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive('orderedList') ? styles.active : styles.non_active
          }
        >
          <ListOrdered />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={
            editor.isActive('blockquote') ? styles.active : styles.non_active
          }
        >
          <TextQuote />
        </button>
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className={cn(styles.non_active)}
        >
          <Minus />
        </button>
        <button
          onClick={() => editor.chain().focus().setHardBreak().run()}
          className={cn(styles.non_active)}
        >
          <WrapText />
        </button>
      </div>
    </div>
  )
}