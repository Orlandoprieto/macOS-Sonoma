'use client'

import { useState } from "react"
import Desktop from "@/components/Desktop";
import LockScreen from "@/components/LockScreen";
import Video from "@/components/Video";

export default function Home() {

  const [locked, setLocked] = useState<boolean>(false)

  const handlerUnlock = (unlock: boolean) => {
    setLocked(unlock)
  }

  return (
    <main >
      <Video />

      {locked
        ? <Desktop />
        : <LockScreen unlock={handlerUnlock} />}
    </main>
  );
}
