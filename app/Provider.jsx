/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { UserDetailContext } from "@/context/UserContext"
import { useUser } from "@clerk/nextjs"
import axios from "axios"
import { useEffect } from "react"

const Provider = ({children}) => {

    const { user } = useUser()
    const [userData, setUserData] = useState();

    const createUser = async() => {
        const res = await axios.post('/api/user', {
            name: user?.fullName,
            email: user?.primaryEmailAddress?.emailAddress
        })
        
        console.log(res.data);
        setUserData(res.data.user);
    }

    useEffect(() => {
        user && createUser()
    }, [user])

  return (
    <UserDetailContext.Provider value={{userData, setUserData}}>
        {children}
    </UserDetailContext.Provider>
  )
}

export default Provider