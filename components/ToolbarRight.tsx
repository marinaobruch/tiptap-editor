'use client'

import { type Editor } from '@tiptap/react'
import cn from 'classnames'
import styles from './Tiptap.module.css'

type Props = {
  editor: Editor | null
}

export const ToolbarRight = ({ editor }: Props) => {
  if (!editor) {
    return null
  }

  return (
    <div className={styles.style_group}>
      <h3 className={styles.subtitle}>Стили текста</h3>
      <div className={styles.button_styles_group}>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive('heading', { level: 1 })
              ? cn(styles.style_btn, styles.active)
              : cn(styles.style_btn, styles.non_active)
          }
        >
          Глава
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive('heading', { level: 2 })
              ? cn(styles.style_btn, styles.active)
              : cn(styles.style_btn, styles.non_active)
          }
        >
          Подглава
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive('heading', { level: 3 })
              ? cn(styles.style_btn, styles.active)
              : cn(styles.style_btn, styles.non_active)
          }
        >
          Подзаголовок
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={
            editor.isActive('heading', { level: 4 })
              ? cn(styles.style_btn, styles.active)
              : cn(styles.style_btn, styles.non_active)
          }
        >
          Обычный
        </button>
      </div>
    </div>
  )
}
