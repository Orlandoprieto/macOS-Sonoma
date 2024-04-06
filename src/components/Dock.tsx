'use client'

import style from "@/styles/dock.module.css"
import { IconAppleSystem } from "@/components/icons"
import { iconsDock } from "../../utils/const"
import {ButtonAppleSystem} from "@/components/ui/Buttons"
import { useState } from "react"


export default function Dock() {
  return (
    <div className={style.dock}>
      {iconsDock.map(icon => {
        return (
          <ButtonAppleSystem 
            icon={icon}
            onClick={() => console.log("hola")}
            button="dock"
          />
        )
      })}
    </div>
  )
}