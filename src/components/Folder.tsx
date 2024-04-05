'use client'

import style from "@/styles/folder.module.css"
import { buttonFolder } from "../../utils/const"
import { FolderButton } from "@/components/ui/Buttons"
import { useState, useRef, useEffect } from "react"
import animejs from "animejs"

interface FolderProps {
  children: React.ReactNode
}

export default function Folder({ children }: FolderProps) {
  const folderRef = useRef(null)

  const [showForder, setShowFolder] = useState<boolean>(false)
  const [resize, setResize] = useState<boolean | null>(null)

  const handlerShowFolder = () => {
    setShowFolder(true)
  }

  const handlerResize = () => {
    setResize(!resize)
  }

  const handlerHiddenFolder = () => {
    setShowFolder(false)
  }

  useEffect(() => {
    animejs({
      width: resize ? '100%' : '50%',
      height: resize ? '100%' : '70%',
      targets: folderRef.current,
      easing: 'easeInOutExpo',
      duration: 200,
    })
  }, [resize])


  return (showForder) && (
    <div ref={folderRef} className={style.folder} >
      <div className={style.header}>
        <div className={style.containerBtn}>

          <FolderButton onClick={handlerHiddenFolder} icon="/icons/Close.svg" />
          <FolderButton onClick={handlerHiddenFolder} icon="/icons/Minimize.svg" />
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