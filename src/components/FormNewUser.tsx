"use client"

import style from "@/styles/form.module.css"
import { TextFields } from "@/components/ui/input"
import { ButtonAppleSystem } from "@/components/ui/Buttons"
import { useForm, FormProvider, SubmitHandler, FieldValues } from "react-hook-form"
import { saveUser, userFullData } from "../../utils/storage"
import Modal from "./Modal"
import { Close } from '@radix-ui/react-dialog'

interface FormNewUserProps {
  openModalButton: React.ReactNode
}

export default function FormNewUser({ openModalButton }: FormNewUserProps) {
  const methods = useForm<userFullData>()

  const createUser = () => {
    const data = methods.getValues()
    saveUser(data)
  };

  return (
    <Modal
      ButtonTriggerModal={openModalButton}

    >
      <FormProvider {...methods}>
        <form className={style.form}>
          <TextFields typeInput="text" field="fullName" label="Full Name" />
          <TextFields typeInput="text" field="nameAcount" label="Account Name" />
          <TextFields typeInput="text" field="mail" label="Mail" />
          <TextFields typeInput="password" field="password" label="Password" />
          <TextFields typeInput="password" field="verify" label="Verify" />

          <div className={style.containerBtn}>
            <Close asChild>
              <ButtonAppleSystem text='Cancel' button="secondary" />
            </Close>
            <Close asChild>
              <ButtonAppleSystem
                onClick={createUser}
                button="primary"
                separation="left"
                text="Create User"
              />
            </Close>
          </div>
        </form>
      </FormProvider>
    </Modal >


  )
}