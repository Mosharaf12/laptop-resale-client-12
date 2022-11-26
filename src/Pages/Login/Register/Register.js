
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';

const googleProvider = new GoogleAuthProvider();

const Register = () => {

    const{createUser,singInPop,updateNameProfile}= useContext(AuthContext)
    const [error,setError] = useState('')


    const handleSubmitRegister= event=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email= form.email.value;
        const password = form.password.value;
        const role = form.role.value;
        console.log(name,email,password,role)

        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('')
            form.reset()
            handleProfile(name)
            toast.success('Registration successful')
            userRole(name,email,role)

 
        })
        .catch(err=>{
            console.error(err)
            setError(err.message)
        })
    }
    const handleProfile=(name)=>{
      const   profile={
            displayName: name,
        }
        updateNameProfile(profile)
        .then(()=>{

        })
        .catch((error)=>{
            console.error(error);
        })

    }


    const handleGoogle=()=>{
        singInPop(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
            const role = 'buyer'
            userRole(user.displayName,user.email, role)

        })
        .catch(err=>{
            console.error(err)
        })

    }
    const userRole =(name,email,role)=>{
        const user = {name, email, role}
        console.log(name,email, role)
        fetch(`http://localhost:5000/users`,{
            method: "POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)

        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
        })
        .catch(err=>{
            console.error(err)
        })

    }


    return (
        <div className='flex justify-center items-center mb-12 mt-5'>
        <div className='shadow-xl p-10'>
            <h3 className='text-3xl text-bold text-center'>Register Now!</h3>
            <form onSubmit={handleSubmitRegister}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input name='name' type='text' className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input name='email' type='email' className="input input-bordered w-full max-w-xs" required />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Password</span></label>
                    <input name='password' type='Password' className="input input-bordered w-full max-w-xs mb-5" required />
                </div>

                <div className="form-control w-full max-w-xs mb-6">
                    <label className="label"> <span className="label-text">What is Your Role?</span></label>
                    <select name='role' className="select select-bordered w-full max-w-xs">
                     <option selected>buyer</option>
                     <option>seller</option>
                    </select>
                </div>
                <input className='btn btn-accent w-full' type="submit" value='Register'  />
                { setError && <p className='text-error'>{error}</p> }
            </form>
            <p className='mt-3'>Already have an account<Link to='/login' className='text-primary'> please Login</Link></p>
            <div className="divider">OR</div>
            <button onClick={handleGoogle} className='btn btn-outline btn-primary w-full'>Continue With Google</button>

        </div>
    </div>
    );
};

export default Register;