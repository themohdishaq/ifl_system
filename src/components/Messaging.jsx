import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Messaging() {
  const showToastMessage = (success) => {
    if(success){
    toast.success("Message sent successfully!", {

    });
  }
  else{
    toast.error("Message failed to send!", {

    });
  }
  };
  return (
    <div className='relative w-full h-screen bg-black text-white p-5 '>
      <div className='text-3xl'>Messaging</div>
      <div className='my-3'>
        <span>
          <a href="">Home</a>
          <span className='mx-3'>/</span>
          <a href="">Compose Messaging</a>
        </span>
      </div>
      <div></div>

     <div>
     <div className=' bg-blue-200 col-span-2 p-3 rounded flex'>
        <div className='flex-grow'>
          <div>
            <label htmlFor='title'>Title:</label>
            <input type='text' id='title' className='w-full p-2 rounded my-2 flex-grow' />
          </div>
          <div>
            <label htmlFor='recepient'>Recipient:</label>
            <input type='text' id='recipient' className='w-full p-2 rounded my-2 flex-grow' />
          </div>
          <div>
            <label htmlFor='message'>Message:</label>
            <br />
            <textarea name="postContent" rows={4} className='w-full p-2 rounded my-2 flex-grow' />
          </div>
        </div>
      </div>
   <div>
      <button type="button"  onClick={()=>showToastMessage(false)} className="focus:outline-none mt-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Send</button>
      <button type="button" className="focus:outline-none mt-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cancel</button>
      </div>
      <ToastContainer />
     </div>
    </div>
  );
}
