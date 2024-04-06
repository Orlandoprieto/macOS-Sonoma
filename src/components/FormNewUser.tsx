import style from "@/styles/form.module.css"
import { TextFields } from "@/components/ui/input"
import { ButtonAppleSystem } from "@/components/ui/Buttons"
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"
import { User, saveUser,} from "../../utils/storage"


export default function FormNewUser() {
  const methods = useForm()

  const createUser = (data: any) => {
    console.log(data)
    saveUser(data)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(createUser)} className={style.form}>
        <div className={style.text}>
          <span>Do you want to create a new user?</span>
          <span>You can choose to save your changes, or delete this document immediately. You can’t undo this action. </span>
        </div>

        <TextFields typeInput="text" field="fullName" label="Full Name" />
        <TextFields typeInput="text" field="nameAcount" label="Account Name" />
        <TextFields typeInput="text" field="mail" label="Mail" />
        <TextFields typeInput="password" field="password" label="Password" />
        <TextFields typeInput="password" field="verify" label="Verify" />
        

        <div className={style.containerBtn}>
          <ButtonAppleSystem button="secondary" separation="left" text="Cancel" />
          <ButtonAppleSystem type="submit" button="primary" separation="left" text="Create User" />
        </div>
      </form>
    </FormProvider>


  )
}