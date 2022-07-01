import { useState } from "react"

const useUser = () => {
    const [users, setUsers] = useState([])
    fetch('https://remembrance-toonie-89591.herokuapp.com/login', {
        method: "GET",
    })
        .then(res => res.json())
        .then(users => {
            setUsers(users)
        })
    return [users]
}
export default useUser