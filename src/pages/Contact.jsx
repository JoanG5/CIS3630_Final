import React from 'react'
import Icon from '../assets/icon.png'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
        <div class="relative flex flex-col bg-base-200 justify-center h-screen overflow-hidden">
            <div class="w-full p-6 m-auto bg-base-100 rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
                <div className='flex justify-center'>
                    <img src={Icon} alt="icon" className="rounded-md" style={{ width: '100px', height: '100px' }}/>
                </div>
                <div className="text-center lg">
                    <h1 className="text-5xl font-bold text-white m-3">Contact Us!</h1>
                </div>
                <form class="space-y-4">
                    <div>
                        <label class="label">
                            <span class="text-base label-text">First Name</span>
                        </label>
                        <input type="text" placeholder="First Name" class="w-full input input-bordered" pattern="[a-zA-Z0-9]+"/>
                    </div>
                    <div>
                        <label class="label">
                            <span class="text-base label-text">Last Name</span>
                        </label>
                        <input type="text" placeholder="Last Name" class="w-full input input-bordered" pattern="[a-zA-Z0-9]+"/>
                    </div>
                    <div>
                        <label class="label">
                            <span class="text-base label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Email Address" class="w-full input input-bordered" />
                    </div>
                    <div>
                        <label class="label">
                            <span class="text-base label-text">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered w-full" placeholder="Message"></textarea>
                    </div>
                    <div>
                        <Link to={"/thankyou"} className="btn btn-block text-white">Send</Link>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Contact