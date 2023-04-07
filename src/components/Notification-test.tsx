import React from 'react'
import chatLogo from '../assets/rocketchat.svg'

const NotifTest = () => {
  return (
    <div className='p-6 max-w-sm mx-auto bg-dark rounded-xl shadow-lg flex items-center space-x-4'>
        <div className='shrink-0'>
            <img src={chatLogo} alt="logo" className='h-12 w-12'/>
        </div>
        <div>
            <div className='text-xl font-medium text-black'>Chit Chat</div>
            <p className='text-slate-500'>You have a new message!</p>
        </div>
    </div>
  )
}

export default NotifTest