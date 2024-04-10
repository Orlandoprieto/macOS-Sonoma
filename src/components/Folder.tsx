'use client'

import style from "@/styles/folder.module.css"
import { FolderButton } from "@/components/ui/Buttons"
import { useState, useRef, useEffect } from "react"
import animejs from "animejs"

interface FolderProps {
  children: React.ReactNode
  onclick: () => void
}

export default function Folder({ children, onclick }: FolderProps) {
  const folderRef = useRef(null)

  const [resize, setResize] = useState<boolean | null>(null)

  const handlerResize = () => {
    setResize(!resize)
  }

  useEffect(() => {
    if (resize !== null) {
      animejs({
        width: resize ? '100%' : '30%',
        height: resize ? '100%' : '65%',
        targets: folderRef.current,
        easing: 'easeInOutQuad',
        duration: 200,
      })
    }
  }, [resize])

  return (
    <div ref={folderRef} className={style.folder} >
      <div className={style.header}>
        <div className={style.containerBtn}>

          <FolderButton onClick={onclick} icon="/icons/Close.svg" />
          <FolderButton onClick={onclick} icon="/icons/Minimize.svg" />
          <FolderButton onClick={handlerResize} icon="/icons/Zoom.svg" />

        </div>
        <div className={style.containerTitle}>
          <span>Create User</span>
        </div>

        <div className={style.containerBtn}>

        </div>
      </div>

      <div className={style.container}>
        {children}
      </div>
    </div>
  )
}