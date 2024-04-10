'use client'

import style from "@/styles/iconDesktop.module.css"
import { IconAppleSystem } from "@/components/icons"

interface iconsDesktopProps {
  name: string
  onDbleClick? : () => void
  icon: string
}

export default function IconDesktop({ name, onDbleClick, icon }: iconsDesktopProps) {

  return (
    <div className="iconDesktop" onDoubleClick={onDbleClick}>
      <div className={style.containerIcon} >
        <IconAppleSystem width={60} path={icon} />
      </div>
      <span className={style.nameIcon}>{name}</span>
    </div>
  )
}