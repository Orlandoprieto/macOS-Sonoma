import style from "@/styles/menuBar.module.css"
import { IconAppleSystem } from "@/components/icons"
import { navApple, iconsBar } from "../../utils/const"

export default function MenuBar() {
  return (
    <div className={style.menuBar}>
      <nav className={style.containerLeft}>
        <IconAppleSystem
          width={20}
          path="/icons/AppleLogo.svg"
        />
        <ul className={style.listNav}>
          {navApple.map((nav, index) => {
            return (
              <li key={`listnav ${index}`}>{nav}</li>
            )
          })}
        </ul>
      </nav>

      <nav className={style.containerRigth}>
        <ul className={style.iconBar}>
          {iconsBar.map((icon, index) => {
            return (
              <li key={`iconBar ${index}`}>
                <IconAppleSystem
                  width={18}
                  path={icon}
                />
              </li>
            )
          })}
        </ul>
        <span className={style.time}>Mon Jun 5 9:41 AM</span>
      </nav>
    </div>
  )
}