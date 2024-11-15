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
      <div className={styles.styles_container}>
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

      <div className={styles.styles_container}>
        <h3 className={cn(styles.subtitle)}>Шрифты текста</h3>
        <div className={styles.button_fonts_group}>
          <button
            onClick={() => editor.chain().focus().setFontFamily('Inter').run()}
            className={
              editor.isActive('textStyle', { fontFamily: 'Inter' })
                ? cn(styles.fonts_btn, styles.active)
                : cn(styles.fonts_btn, styles.non_active)
            }
            data-test-id="inter"
          >
            Inter
          </button>
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .setFontFamily('Comic Sans MS, Comic Sans')
                .run()
            }
            className={
              editor.isActive('textStyle', {
                fontFamily: 'Comic Sans MS, Comic Sans',
              })
                ? cn(styles.fonts_btn, styles.active)
                : cn(styles.fonts_btn, styles.non_active)
            }
            data-test-id="comic-sans"
          >
            Comic Sans
          </button>
          <button
            onClick={() => editor.chain().focus().setFontFamily('serif').run()}
            className={
              editor.isActive('textStyle', { fontFamily: 'serif' })
                ? cn(styles.fonts_btn, styles.active)
                : cn(styles.fonts_btn, styles.non_active)
            }
            data-test-id="serif"
          >
            Serif
          </button>
          <button
            onClick={() =>
              editor.chain().focus().setFontFamily('monospace').run()
            }
            className={
              editor.isActive('textStyle', { fontFamily: 'monospace' })
                ? cn(styles.fonts_btn, styles.active)
                : cn(styles.fonts_btn, styles.non_active)
            }
            data-test-id="monospace"
          >
            Monospace
          </button>
          <button
            onClick={() =>
              editor.chain().focus().setFontFamily('cursive').run()
            }
            className={
              editor.isActive('textStyle', { fontFamily: 'cursive' })
                ? cn(styles.fonts_btn, styles.active)
                : cn(styles.fonts_btn, styles.non_active)
            }
            data-test-id="cursive"
          >
            Cursive
          </button>
          <button
            onClick={() =>
              editor
                .chain()
                .focus()
                .setFontFamily('"Comic Sans MS", "Comic Sans"')
                .run()
            }
            className={
              editor.isActive('textStyle', { fontFamily: '"Comic Sans"' })
                ? cn(styles.fonts_btn, styles.active)
                : cn(styles.fonts_btn, styles.non_active)
            }
            data-test-id="comic-sans-quoted"
          >
            Comic Sans quoted
          </button>
          <button
            onClick={() => editor.chain().focus().unsetFontFamily().run()}
            className={cn(styles.fonts_btn, styles.non_active)}
            data-test-id="unsetFontFamily"
          >
            Unset font family
          </button>
        </div>
      </div>
    </div>
  )
}
