'use client'

import MenuBar from "./MenuBar"
import Folder from "./Folder"
import FormNewUser from "./FormNewUser"
import Dock from "./Dock"
import { ButtonAppleSystem } from "@/components/ui/Buttons"
import { useState } from "react"
import Grid from "./Grid"
import IconDesktop from "./ui/IconDesktop"

export default function Desktop() {

  const [showForder, setShowFolder] = useState<boolean>(false)
  const [iconsInDesktop, setIconsInDesktop] = useState<JSX.Element[]>([])

  const handlerShowFolder = () => {
    if (!showForder) {
      setShowFolder(true)
    } else {
      setShowFolder(false)
    }
  }

  return (
    <div style={{ display: 'grid', width: '100vw', height: '100vh', paddingTop: '30px', paddingBottom :'77px' }}>
      <MenuBar />
      {/* <ButtonAppleSystem
        button="dock"
        icon="/icons/iconDock/App Icon=System Preferences.svg"
        onClick={handlerShowFolder}
      />

      {showForder && (
        <Folder onclick={handlerShowFolder}>
          <FormNewUser />
        </Folder>
      )} */}

      <Grid>
        <IconDesktop name="Escritorio"/>
        <IconDesktop name="papelera" />
        <IconDesktop name="musica"/>
        <IconDesktop name="videos"/>
        <IconDesktop name="descargas"/>
      </Grid>

      <Dock />
    </div>
  )
}