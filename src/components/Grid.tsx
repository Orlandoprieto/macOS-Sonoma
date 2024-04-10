'use client'

import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "react-use"
import dragula from "../../lib/dragula-master"

interface GridProps {
  children: React.ReactNode[]
}

export default function Grid({ children }: GridProps) {
  const windowSize = useWindowSize()
  const gridRef = useRef(null)
  const [fillFildsEmpty, setFillFildsEmpty] = useState<React.ReactNode[]>([])

  useEffect(() => {
    const width = windowSize.width;
    const heigth = windowSize.height - (30 - 77) //<--- altura de pantalla - padding aplicado en Desktop.tsx;
    const areaWindow = width * heigth;
    const areaIcon = 8640;
    const iconsEmpty = (areaWindow / areaIcon) - children.length;
    const emptyDivs = [...children];

    for (let i = 0; i < iconsEmpty; i++) {
      emptyDivs.push(<div className="iconDesktop no--draggable yes--drop" key={i}></div>);
    }

    setFillFildsEmpty(emptyDivs)

    if (!gridRef.current) return

    dragula([gridRef.current], {
      invalid: (element: { classList: { contains: (arg0: string) => any; }; }) => {
        if (!element) return false
        return element.classList.contains("no--draggable")
      },
    })
    .on("drag", (element: { classList: { add: (arg0: string) => void; }; }) => {
      element.classList.add("addOpacity")
    })
    .on("dragend", (element: { classList: { remove: (arg0: string) => void; }; }) => {
      element.classList.remove("addOpacity")
    })
  }, []);


  return (
    <div id="Grid" ref={gridRef}>
      {fillFildsEmpty.map(iconEmpty => {
        return iconEmpty
      })}
    </div>
  )
}