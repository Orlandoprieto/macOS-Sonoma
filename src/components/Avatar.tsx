'use client'

import { User } from "../../utils/storage"
import { useEffect, useState, useRef } from "react"
import style from "@/styles/avatar.module.css"
import { AvatarIcon } from "@/components/icons"
import animejs from "animejs"


interface AvatarProps extends User {
  pathImg?: string
  deploy: boolean
  index: number
  handlerChangeUser: ({ fullName, password }: User) => void
}

export default function Avatar({
  index,
  deploy,
  pathImg,
  fullName,
  password,
  nameAcount,
  mail,
  handlerChangeUser
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
      onClick={() => handlerChangeUser({ fullName, password, mail, nameAcount })}
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