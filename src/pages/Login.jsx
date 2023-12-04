import React from 'react'
import Icon from '../assets/icon.png'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
        <div class="relative flex flex-col bg-base-200 justify-center h-screen overflow-hidden">
            <div class="w-full p-6 m-auto bg-base-100 rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
                <div className='flex justify-center'>
                    <img src={Icon} alt="icon" className="rounded-md" style={{ width: '100px', height: '100px' }}/>
                </div>
                <div className="text-center lg">
                    <h1 className="text-5xl font-bold text-white m-3">Login now!</h1>
                </div>
                <form class="space-y-4">
                    <div>
                        <label class="label">
                            <span class="text-base label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Email Address" class="w-full input input-bordered" />
                    </div>
                    <div>
                        <label class="label">
                            <span class="text-base label-text ">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Password"
                            class="w-full input input-bordered" />
                    </div>
                    <a href="#" class="text-xs hover:underline text-blue-600">Forget Password?</a>
                    <div>
                    <Link to={"/"} className="btn btn-block text-white">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Login