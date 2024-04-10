export default function Video() {
  
  return <video
    style={{
      display: 'flex',
      position: "absolute",
      width: '100vw',
      height: '100vh',
      objectFit: 'cover',
      zIndex: "-1"
    }}
    src="/vid/3115738-hd_1920_1080_24fps.mp4"
    autoPlay
    loop
  />
}



