'use client'

import { Plugins, Swappable } from "@shopify/draggable";
import { use, useEffect, useRef, useState } from "react";

interface GridProps {
  children: React.ReactNode[]
}

export default function Grid({ children }: GridProps) {
  const gridRef = useRef(null)
  const [fillFildsEmpty, setFillFildsEmpty] = useState<React.ReactNode[]>([])

  useEffect(() => {
    const width = window.innerWidth;
    const heigth = window.innerHeight - 973 - children.length;
    const areaWindow = width * heigth
    const areaIcon = 864
    const iconsEmpty = areaWindow / areaIcon
    const emptyDivs = [...children];

    for (let i = 0; i < iconsEmpty; i++) {
      emptyDivs.push(<div className="iconDesktop" key={i}></div>);
    }

    setFillFildsEmpty(emptyDivs)

    if (gridRef.current) {
      const swappable = new Swappable(gridRef.current, {
        draggable: '.iconDesktop',
        mirror: {
          appendTo: gridRef.current,
          constrainDimensions: true,
        },
        plugins: [Plugins.ResizeMirror],
      });

      return () => {
        swappable.destroy();
      };
    }
  }, []);


  return (
    <div id="Grid" ref={gridRef}>
      {fillFildsEmpty.map(iconEmpty => {
        return iconEmpty
      })}
    </div>
  )
}