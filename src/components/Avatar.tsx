'use client'

import { InfoUser } from "../../utils/storage"
import { useEffect, useState, useRef } from "react"
import style from "@/styles/avatar.module.css"
import { AvatarIcon } from "@/components/icons"
import animejs from "animejs"

export function AvatarListUsers({fullName, typeOfuser}: InfoUser) {
  return (
    <div className={style.containerAvatarListUsers}>
      <div className={style.containerAvatar}>
        <AvatarIcon width={45} />
      </div>

      <div className={style.InfoUser}>
        <span>{fullName}</span>
        <span>{typeOfuser}</span>
      </div>
    </div>
  )
}

interface AvatarProps extends InfoUser {
  pathImg?: string
  deploy: boolean
  index: number
  handlerClick: (nameAcount: string) => void
}

export function AvatarLockScreen({
  index,
  deploy,
  fullName,
  nameAcount,
  handlerClick
}: AvatarProps) {
  const users = useRef(null)
  const name = useRef(null)

  useEffect(() => {
    animejs({
      translateY: deploy ? (-80 * index) : 0,
      targets: users.current,
      easing: 'easeInOutExpo',
      duration: 800,
    })

    animejs({
      marginLeft: deploy ? '10px' : '0px',
      width: deploy ? '68%' : '0%',
      targets: name.current,
      easing: 'easeInOutQuad',
      duration: 800,
      opacity: [0, 1]
    })

  }, [deploy])

  return (
    <div
      ref={users}
      className={style.base}
      onClick={() => {
        if (!nameAcount) return
        handlerClick(nameAcount)
      }}
    >
      <div
        className={style.containerAvatar}
      >
        <AvatarIcon width={45} />
      </div>

      <span
        ref={name}
        className={style.nameUser}
      >
        {fullName}
      </span>
    </div>
  )
}