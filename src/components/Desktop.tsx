'use client'

import MenuBar from "./MenuBar"
import Folder from "./Folder"
import FormNewUser from "./FormNewUser"
import Dock from "./Dock"

export default function Desktop() {

  return (
    <div style={{ display: 'grid', width: '100vw', height: '100vh', paddingTop: '60px' }}>
      <MenuBar />
      <Folder>
        <FormNewUser />
      </Folder>
      <Dock />
    </div>
  )
}