export interface User {
   fullName: string
   password: string
   mail?: string
   nameAcount?: string
}

export const getUsers = () => {
   const json: any = localStorage.getItem("users")

   if (json == null) {
      localStorage.setItem("users", JSON.stringify([{ fullName: "Orlando Prieto", password: "123456789", mail: "orlandoprieto19@gmail.com", nameAcount: "Orlando Prieto" }]))
   }

   return JSON.parse(json)
}

export const saveUser = ({
   fullName,
   password,
   mail,
   nameAcount
}: User) => {
   const users: User[] = getUsers()

   const newUser: User = { fullName, password, mail, nameAcount}

   users.push(newUser)

   localStorage.setItem("users", JSON.stringify(users))
}

