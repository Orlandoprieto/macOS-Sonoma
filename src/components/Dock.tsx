'use client'

import style from "@/styles/dock.module.css"
import { iconsDock } from "../../utils/const"
import {ButtonAppleSystem} from "@/components/ui/Buttons"


export default function Dock() {
  return (
    <div className={style.dock}>
      {iconsDock.map((icon, index) => {
        return (
          <ButtonAppleSystem 
            key={`$dock ${index}`}
            icon={icon}
            onClick={() => console.log("hola")}
            button="dock"
          />
        )
      })}
    </div>
  )
}