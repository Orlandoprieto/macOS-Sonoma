import style from "@/styles/form.module.css"
import { TextFields } from "@/components/ui/input"
import { ButtonAppleSystem } from "@/components/ui/Buttons"

export default function FormNewUser() {
  return (
    <form className={style.form}>
      <div className={style.text}>
        <span>Do you want to create a new user?</span>
        <span>You can choose to save your changes, or delete this document immediately. You can’t undo this action. </span>
      </div>

      <TextFields typeInput="text" label="Full Name" />
      <TextFields typeInput="text" label="Acount Name" />
      <TextFields typeInput="text" label="Mail" />
      <TextFields typeInput="password" label="Password" />
      <TextFields typeInput="password" label="Verify" />

      <div className={style.containerBtn}>
        <ButtonAppleSystem button="secondary" separation="left" text="Cancel" />
        <ButtonAppleSystem button="primary" separation="left" text="Create User" />
      </div>
    </form>
  )
}