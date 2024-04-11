'use client'

import { useRef, useEffect} from "react"

export default function Video() {
  const elementVideo = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!elementVideo.current) return
    elementVideo.current.addEventListener('', () => {
      console.log("hola")
    })
  }, [])


  return <video
    ref={elementVideo}
    style={{
      display: 'flex',
      position: "absolute",
      width: '100vw',
      height: '100vh',
      objectFit: 'cover',
      zIndex: "-1"
    }}
    src="/vid/1436812-hd_2048_1080_24fps.mp4"
    autoPlay
    loop
  />
}



