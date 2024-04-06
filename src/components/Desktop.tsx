'use client'

import MenuBar from "./MenuBar"
import Folder from "./Folder"
import FormNewUser from "./FormNewUser"
import Dock from "./Dock"
import { ButtonAppleSystem } from "@/components/ui/Buttons"
import { useState } from "react"

export default function Desktop() {

  const [showForder, setShowFolder] = useState<boolean>(false)

  const handlerShowFolder = () => {
    if (!showForder) {
      setShowFolder(true)
    } else {
      setShowFolder(false)
    }
  }

  return (
    <div style={{ display: 'grid', width: '100vw', height: '100vh', paddingTop: '60px' }}>
      <MenuBar />
      <ButtonAppleSystem
        button="dock"
        icon="/icons/iconDock/App Icon=System Preferences.svg"
        onClick={handlerShowFolder}
      />

      {showForder && (
        <Folder onclick={handlerShowFolder}>
          <FormNewUser />
        </Folder>
      )}

      <Dock />
    </div>
  )
}