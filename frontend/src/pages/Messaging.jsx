import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Messaging() {
  const showToastMessage = (success) => {
    if (success) {
      toast.success("Successfully Message Sent!", {});
    }
    else {
      toast.error("Some Field Required Here!", {});
    }
  };

  return (
    <div className='relative w-full p-8'>
      <div className='text-3xl '>Messaging</div>
      <div className='my-3'>
          <a href="/">Home</a>
        <span className='text-amber-600 hover:f'>
          <span className='mx-3'>/</span>
          <a href="/messaging">Compose Messaging</a>
        </span>
      </div>

      <div className='col-span-2 p-5 mt-10 rounded flex bg-slate-200'>
        <div className='flex-grow'>
          <div className='mb-4 text-xl font-semibold'>Write New Message</div>
          <div className='my-2'>
            <label htmlFor='title'>Title:</label>
            <input type='text' id='title' className='w-full p-2 rounded my-2 flex-grow' />
          </div>
          <div className='my-2'>
            <label htmlFor='recepient'>Recipient:</label>
            <input type='text' id='recipient' className='w-full p-2 rounded my-2 flex-grow' />
          </div>
          <div className='my-2'>
            <label htmlFor='message'>Message:</label>
            <br />
            <textarea name="message" rows={5} className='w-full p-2 rounded my-2 flex-grow' />
          </div>
        </div>
      </div>
      <div className='flex float-right my-8'>
        <button type="button" onClick={() => showToastMessage(true)} className="font-medium rounded text-sm px-8 py-2.5 me-7 focus:outline-none bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-300 text-white">Send</button>
        <button type="button" className="font-medium rounded text-sm px-8 py-2.5 me-2 focus:outline-none bg-blue-950 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 text-white">Cancel</button>
      </div>
      <ToastContainer />
    </div>
  );
}
