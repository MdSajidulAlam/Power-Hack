import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.email
        const currentUser = { email: email }
        if (email) {
            fetch('https://remembrance-toonie-89591.herokuapp.com/login', {
                method: 'POST',
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.accessToken
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken)
                })

        }


    }, [user])

    return [token]
}
export default useToken