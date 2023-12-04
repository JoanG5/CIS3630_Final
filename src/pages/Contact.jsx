import React from 'react';
import { useForm } from 'react-hook-form';
import Icon from '../assets/icon.png';
import { useNavigate  } from 'react-router-dom';

function Contact() {
 const { register, handleSubmit, formState: { errors } } = useForm();
 const navigate = useNavigate();
 const onSubmit = data => {
    console.log(data);
    navigate('/thankyou');
   };

 return (
   <>
     <div className="relative flex flex-col bg-base-200 justify-center h-screen overflow-hidden">
       <div className="w-full p-6 m-auto bg-base-100 rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-lg">
         <div className='flex justify-center'>
           <img src={Icon} alt="icon" className="rounded-md" style={{ width: '100px', height: '100px' }}/>
         </div>
         <div className="text-center lg">
           <h1 className="text-5xl font-bold text-white m-3">Contact Us!</h1>
         </div>
         <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
           <div>
             <label className="label">
               <span className="text-base label-text">First Name</span>
             </label>
             <input type="text" placeholder="First Name" className="w-full input input-bordered" {...register("firstName", { required: true })}/>
             {errors.firstName && <p>First Name is required</p>}
           </div>
           <div>
             <label className="label">
               <span className="text-base label-text">Last Name</span>
             </label>
             <input type="text" placeholder="Last Name" className="w-full input input-bordered" {...register("lastName", { required: true })}/>
             {errors.lastName && <p>Last Name is required</p>}
           </div>
           <div>
             <label className="label">
               <span className="text-base label-text">Email</span>
             </label>
             <input type="text" placeholder="Email Address" className="w-full input input-bordered" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}/>
             {errors.email && <p>Email is required and should be in valid format</p>}
           </div>
           <div>
             <label className="label">
               <span className="text-base label-text">Message</span>
             </label>
             <textarea className="textarea textarea-bordered w-full" placeholder="Message" {...register("message", { required: true })}></textarea>
             {errors.message && <p>Message is required</p>}
           </div>
           <div>
             <button type="submit" className="btn btn-block text-white" >Send</button>
           </div>
         </form>
       </div>
     </div>
   </>
 );
}

export default Contact;
