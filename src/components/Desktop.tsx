'use client'

import MenuBar from "./MenuBar"
import Window from "./Window"
import FormNewUser from "./FormNewUser"
import Dock from "./Dock"
import { useState } from "react"
import Grid from "./Grid"
import IconDesktop from "./ui/IconDesktop"
import ListOfUser from "./ListOfUser"

export default function Desktop() {

  const [showForder, setShowFolder] = useState<boolean>(false)

  const handlerShowFolder = () => {
    setShowFolder(!showForder)
  }

  return (
    <div style={{
      position: "relative",
      display: 'grid',
      width: '100vw',
      height: '100vh',
      paddingTop: '30px',
      paddingBottom: '77px'
    }}
    >
      <MenuBar />
      <Grid>
        <IconDesktop onDbleClick={handlerShowFolder} name="Create User" icon="/icons/iconDock/App Icon=Folder Icon.svg" />
        <IconDesktop name="Safari" icon="/icons/iconDock/App Icon=Safari.svg" />

      </Grid>

      {showForder && (
        <Window title="Users & Groups" onclick={handlerShowFolder}>
          <ListOfUser />
        </Window>
      )}
      <Dock />
    </div>
  )
}