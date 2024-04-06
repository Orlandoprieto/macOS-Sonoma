import { cva, type VariantProps } from "class-variance-authority"
import style from "@/styles/buttons.module.css"
import { ArrowIcon, IconAppleSystem } from "@/components/icons"

const buttonVariants = cva(style.base, {
  variants: {
    button: {
      primary: style.primary,
      secondary: style.secondary,
      dock: style.dock

    },
    separation: {
      left: style.marginLeft,
      rigth: style.marginRigth

    }
  }
})

interface buttonProps extends VariantProps<typeof buttonVariants> {
  onClick?: () => void
  icon?: string
  text?: string
  type?: "submit"
  
}

export function ButtonAppleSystem({type ,onClick, icon, text, button, separation }: buttonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonVariants({ button, separation })}
    >
      {(icon) && <IconAppleSystem width={55} path={icon} />}
      {(text) && text}
    </button>
  )
}

export function LoginButton({ onClick }: buttonProps) {
  return (
    <button
      onClick={onClick}
      className={style.login}
    >
      <ArrowIcon width={30} />
    </button>
  )
}

export function FolderButton({ onClick, icon }: buttonProps) {
  return (
    <button
      onClick={onClick}
      className={style.buttonFolder}
    >
      <IconAppleSystem width={17} path={icon} />
    </button>
  )
}



