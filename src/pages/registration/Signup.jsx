import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import MyContext from '../../context/data/myContext';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../firebase/FirebaseConfig';
import { Timestamp, addDoc, collection, serverTimestamp } from 'firebase/firestore';

function Signup() {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const context = useContext(MyContext);
    const { loading, setLoading } = context;

    const signup = async () => {
        setLoading(true)
        if(name == '' || email == '' || password == '') {
            return toast.error('All fields are required!');
        }
        
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            const user = {
                name: name,
                uid: response.user.uid,
                email: response.user.email,
                time: Timestamp.now()
            }
            const userRef = collection(fireDB, 'users');
            await addDoc(userRef, user)
            toast.success('Congrats! You are signed up.')
            setName('');
            setEmail('');
            setPassword('')
            setLoading(false)
        } catch(err) {
            toast.error('Sign up failed!')
            setLoading(false)
        }
    }
   
    return (
        <div className=' flex justify-center items-center h-screen'>
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
                </div>
                <div>
                    <input type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        name='name'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Name'
                    />
                </div>
                <div>
                    <input type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                        onClick={signup}
                        className={`${loading ? 'bg-gray-500 pointer-events-none' : 'bg-red-500'} w-full text-white font-bold  px-2 py-2 rounded-lg`}
                        disabled={loading}
                        >
                        {loading ? 'Loading' : 'Signup'}
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Have an account <Link className=' text-red-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Signup