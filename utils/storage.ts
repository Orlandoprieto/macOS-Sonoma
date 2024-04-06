export interface User {
   fullName: string
   password: string
   mail?: string
   nameAcount?: string
}

export const getUsers = () => {
   let json: string | null = localStorage.getItem("users")

   if (json == null) {
      const defaultUser: User = {
         fullName: "User",
         password: "123",
         mail: "user19@gmail.com",
         nameAcount: "User"
      };

      localStorage.setItem("users", JSON.stringify([defaultUser]));
      return [defaultUser];
   }

   return JSON.parse(json) as User[];
}


export const saveUser = ({
   fullName,
   password,
   mail,
   nameAcount
}: User) => {
   const users: User[] = getUsers()

   const newUser: User = { fullName, password, mail, nameAcount }
   users.push(newUser)
   console.log(users)
   localStorage.setItem("users", JSON.stringify(users))
}

