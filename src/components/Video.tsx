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
    src="/vid/VID_20171105_190943.mp4"
    autoPlay
    loop
  />
}



