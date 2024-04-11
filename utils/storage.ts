
export interface InfoUser {
   typeOfuser: 'Administrador'
   fullName: string,
   avatar?: string
   nameAcount?: string
   mail?: string
}

export interface CredentialsUser {
   password: string
   nameAcount?: string
}

export interface userFullData extends InfoUser, CredentialsUser{}

export const getUsers = () => {
   let json: string | null = localStorage.getItem("users")

   if (json == null) {
      const defaultUser: userFullData = {
         typeOfuser: "Administrador",
         fullName: "User",
         password: "123",
         nameAcount: "User",
         mail: "orlandoprieto19@gmail.com"
      };

      localStorage.setItem("users", JSON.stringify([defaultUser]));
      return [defaultUser];
   }

   return JSON.parse(json) as userFullData[];
}


export const saveUser = ({
   fullName,
   password,
   nameAcount,
   mail
}: userFullData) => {
   const users: userFullData[] = getUsers()

   const newUser: userFullData = { typeOfuser: 'Administrador', fullName, mail, password, nameAcount }
   users.push(newUser)
   localStorage.setItem("users", JSON.stringify(users))
}

