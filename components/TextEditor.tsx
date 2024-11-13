'use client'

import 'highlight.js/styles/atom-one-dark.css'

import { useState } from 'react'
import Tiptap from './Tiptap'
import { initContent } from './init-data'

const TextEditor = () => {
  const [content, setContent] = useState<string>(initContent)
  const handleContentChange = (newContent: string) => {
    setContent(newContent)
  }

  return (
    <Tiptap
      content={content}
      onChange={(newContent: string) => handleContentChange(newContent)}
    />
  )
}

export default TextEditor
