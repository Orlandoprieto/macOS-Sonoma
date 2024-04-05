import Image from "next/image"

interface IconsProps {
  width: number
  path?: string
}

export const ArrowIcon = ({
  width
}: IconsProps) => {
  return (
    <Image
      alt=""
      width={width}
      height={width}
      src="/icons/arrow-forward-circle-outline.svg" />
  )
}

export const AvatarIcon = ({
  width,
  path = "/icons/Boy-Emoji-Avatar-PNG.png"
}: IconsProps) => {
  return (
    <Image
      alt=""
      width={width}
      height={width}
      src={path}
    />
  )
}

export const IconAppleSystem = ({
  width,
  path = ""
}: IconsProps) => {
  return (
    <Image
      alt=""
      width={width}
      height={width}
      src={path}
    />
  )
}

