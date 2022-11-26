import { GoogleAuthProvider } from 'firebase/auth';
import React,{useContext,useState} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const googleProvider = new GoogleAuthProvider();

const Login = () => {
    const{signIn,singInPop}= useContext(AuthContext)
    const [error,setError]= useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();


    const handleSubmitLogin= event=>{
        event.preventDefault()
        const form = event.target;
        const email= form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signIn(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('')
            navigate(from,{replace: true})
        })
        .catch(err=>{
            console.error(err)
            setError(err.message);
        })
        

    }
    const handleGoogle=()=>{
        singInPop(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(err=>{
            console.error(err)
        })

    }

    return (
            <div className='flex justify-center items-center mb-12 mt-5'>
            <div className='shadow-xl p-10'>
                <h3 className='text-3xl text-bold text-center'>Please Login</h3>
                <form onSubmit={handleSubmitLogin}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input name='email' type='email' className="input input-bordered w-full max-w-xs" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input name='password' type='Password' className="input input-bordered w-full max-w-xs mb-5" required />
                    </div>
                    <input className='btn btn-accent w-full' type="submit" value='Login'  />
                {setError && <p className='text-error'>{error}</p> }
                </form>
                <p className='mt-3'>Add to New<Link to='/register' className='text-primary'> Create an new Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogle} className='btn btn-outline btn-primary w-full'>Continue With Google</button>
    
            </div>
        </div>
        
    );
};

export default Login;