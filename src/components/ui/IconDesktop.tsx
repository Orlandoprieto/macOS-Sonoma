import style from "@/styles/iconDesktop.module.css"
import {IconAppleSystem} from "@/components/icons"

interface iconsDesktopProps {
  name: string
}

export default function IconDesktop({name}: iconsDesktopProps) {
  return (
    <div className="iconDesktop">
      <div className={style.containerIcon}>
      <IconAppleSystem width={60} path="/icons/iconDock/App Icon=Folder Icon.svg"/>
      </div>
      <span className={style.nameIcon}>{name}</span>
    </div>
  )
}