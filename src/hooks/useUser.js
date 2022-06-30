import { useState } from "react"

const useUser = () => {
    const [users, setUsers] = useState([])
    fetch('http://localhost:5000/login', {
        method: "GET",
    })
        .then(res => res.json())
        .then(users => {
            setUsers(users)
        })
    return [users]
}
export default useUser