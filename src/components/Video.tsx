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
    src="/vid/2888383-uhd_3840_2160_24fps.mp4"
    autoPlay
    loop
  />
}



