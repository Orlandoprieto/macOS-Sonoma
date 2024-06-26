'use client'

import style from "@/styles/lockScreen.module.css"
import { LoginInput } from "./ui/input"
import { AvatarLockScreen } from "./Avatar"
import { useEffect, useState, useRef } from "react"
import { getUsers, userFullData as User } from "../../utils/storage"

export default function LockScreen({ unlock }: { unlock: (param: boolean) => void }) {
  const [showUser, setShowUsers] = useState<boolean>(false)
  const [users, setUsers] = useState<User[]>([])
  const [userCurrent, setUserCurrent] = useState<User>()

  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const changeUser = (nameAcount: string) => {
    setUserCurrent(
      users.find(user => user.nameAcount == nameAcount)
    )
  }

  const handlerLogin = () => {
    unlock(
      userCurrent?.password == inputPasswordRef.current?.value
    )
  }

  useEffect(() => {
    const users = getUsers();
    setUsers(users);
    setUserCurrent(users[0]);
  }, []);


  return (
    <div className={style.container}>
      <div className={style.timeContainer}>
        <span>Lunes, 24 de septiembre</span>
        <span>5:00</span>
      </div>

      <div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            className={style.containerUser}
            onMouseEnter={() => setShowUsers(users.length > 1)}
            onMouseLeave={() => setShowUsers(false)}
          >
            {users.map((user, index) => {
              return (
                <AvatarLockScreen
                  typeOfuser={user.typeOfuser}
                  handlerClick={changeUser}
                  key={`${user} ${index}`}
                  deploy={showUser}
                  index={index}
                  fullName={user.fullName}
                />
              )
            })}

          </div>

          <div className={style.containerCurrentName}>
            <span
              style={{ opacity: showUser ? '0' : '1' }}
              className={style.userCurrentName}
            >
              {userCurrent?.fullName}
            </span>
          </div>

          <div>
            <LoginInput
              ref={inputPasswordRef}
              logIn={handlerLogin}
              typeInput="password"
              placeholder="Contraseña"
            />
          </div>
        </div>
      </div>
    </div>
  )
}