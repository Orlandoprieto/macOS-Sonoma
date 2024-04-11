import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'
import { ButtonAppleSystem } from './ui/Buttons'
import style from '@/styles/modal.module.css'

interface ModalProps {
  children: React.ReactNode
  ButtonTriggerModal: React.ReactNode
}

export default function Modal({
  children,
  ButtonTriggerModal,
}: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        {ButtonTriggerModal}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={style.overlay} />
        <Dialog.Content className={style.DialogContent}>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}


