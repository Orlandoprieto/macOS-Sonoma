'use client'

import MenuBar from "./MenuBar"
import Folder from "./Folder"
import FormNewUser from "./FormNewUser"
import Dock from "./Dock"
import { useState } from "react"
import Grid from "./Grid"
import IconDesktop from "./ui/IconDesktop"

export default function Desktop() {

  const [showForder, setShowFolder] = useState<boolean>(false)

  const handlerShowFolder = () => {
    setShowFolder(!showForder)
}

  return (
    <div style={{position:"relative" , display: 'grid', width: '100vw', height: '100vh', paddingTop: '30px', paddingBottom :'77px' }}>
      <MenuBar />
      <Grid>
        <IconDesktop onDbleClick={handlerShowFolder} name="Create User" icon="/icons/iconDock/App Icon=Folder Icon.svg"/>
        <IconDesktop name="Safari" icon="/icons/iconDock/App Icon=Safari.svg"/>
        
      </Grid> 

      {showForder && (
        <Folder onclick={handlerShowFolder}>
          <FormNewUser/>
        </Folder>
      )}
      <Dock />
    </div>
  )
}