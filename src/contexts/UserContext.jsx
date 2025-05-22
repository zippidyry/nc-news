import { createContext, useState } from "react"

export const UserContext = createContext()

export function UserProvider({ children }) {
  const [user] = useState({ username: "grumpy19" })

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  )
}
