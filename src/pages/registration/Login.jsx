import { signInWithEmailAndPassword } from 'firebase/auth'
import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/FirebaseConfig'
import { toast } from 'react-toastify'
import MyContext from '../../context/data/myContext'
import './signup.css'

function Login() {
    const navigate = useNavigate()
    const location = useLocation()
    const redirectPath = location.state?.from ? location.state?.from : '/'

    const [ loading, setLoading ] = useState(false)
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const login = async () => {
    setLoading(true)

    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        toast.success('Welcome, you\'re logged in')
        localStorage.setItem('user', JSON.stringify(user))
        navigate(redirectPath)
        setLoading(false)
    } catch(err) {
        console.log(err.message)
        setLoading(false)
    }
   }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="form-container flex flex-col justify-center items-center">
                <p className="title">Login</p>
                {/* <p class="sub-title">Let's get statred with your 30 days free trial</p> */}
                <form className="sign-form my-4">
                    <input 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        name='name'
                        type="email"
                        className='border border-[#b8b8b8] p-3 rounded-md placeholder:text-[#d3d3d3] outline-none'
                        placeholder="Email"
                    />
                    <input 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                        name='password'  
                        type="password" 
                        className='border border-[#b8b8b8] p-3 rounded-md placeholder:text-[#d3d3d3] outline-none' 
                        placeholder="Password"
                    />
                    <button
                        onClick={login}
                        className={`${loading && 'bg-gray-500 pointer-events-none'} bg-[#000] text-[#fff] py-3 rounded-md`}
                        
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : 'Log in'}
                    </button>         
                </form>
                <p className="sign-up-label">
                    Don't have account?<Link to='/signup' className="sign-up-link">Create Account</Link>
                </p>
            </div>
        </div>
    )
}

export default Login