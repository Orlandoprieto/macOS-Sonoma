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
    src="/vid/10411422-uhd_3840_2160_30fps.mp4"
    autoPlay
    loop
  />
}



