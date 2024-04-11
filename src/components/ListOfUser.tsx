'use client'

import FormNewUser from './FormNewUser'
import { getUsers, userFullData } from '../../utils/storage'
import { AvatarListUsers } from '@/components/Avatar'
import style from '@/styles/listOfUser.module.css'
import { ButtonAppleSystem } from '@/components/ui/Buttons'
import { useState, useEffect } from 'react'

export default function ListOfUser() {
  const [users, setUsers] = useState<userFullData[]>([])

  useEffect(() => {
    setUsers(getUsers)
  }, [])

  return (
    <div className={style.container}>
      <div className={style.listOfUser}>
        {users.map(user => {
          return (
            <AvatarListUsers
              fullName={user.fullName}
              typeOfuser={user.typeOfuser}
            />
          )
        })}
      </div>
      <div className={style.containerBtn}>
        <FormNewUser
          openModalButton={<ButtonAppleSystem
            text='Add user'
            button="secondary"
          />}
        />
      </div>
    </div>
  )
}