import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Log = () => {

    const navigate = useNavigate()

    const [userdata, setUserdata] = useState({
        username: "", password: ""
        
    })

    const updateUsername = (value) => {

        setUserdata((state) => {
            return { ...state, username: value }
        })


    }

    const updateUserpassword = (value) => {

        setUserdata((state) => {
            return { ...state, password: value }
        })


    }

    const handlesubmit = () => {

        axios.get('http://localhost:9000/credentials', {params:userdata})
            .then((res) => {

                alert(res.data.data)
                if(res.data.data  === 'Login Successfully'){

                        navigate('/Homepage')
                }

            
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
            
            

    }


    return (

        <div>

            <div>

                <form>

                    <input id='user'

                        onKeyUp={(e) => {
                            updateUsername(e.target.value)
                        }}

                        type="username" placeholder="username">

                    </input>

                    <input id='pass' onKeyUp={(e) => {
                        updateUserpassword(e.target.value)
                    }}

                        type="password" placeholder="password">



                    </input>

                    
                </form>
                <button onClick={(e) => {
                        handlesubmit()
                    }}
                        className='btn btn-md btn-danger'>

                        submit</button>

            </div>

        </div>
    )
}

export default Log