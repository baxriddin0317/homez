'use client'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const LoginModal = ({setIsLogin, isLogin}) => {
  return (
    <div className={`hidden md:block fixed w-full h-full ${isLogin ? 'right-0 top-0 z-[60]' : '-right-full'}`}>
      <div onClick={() => setIsLogin(false)} className={`absolute ${isLogin ? 'w-full h-full' : 'w-0 h-0'} bg-black/50 z-[60] inset-0`}>
      </div>
      <div className={`absolute flex flex-col z-[70] max-w-[500px] w-full h-auto bg-white transition-all duration-500 left-1/2 -translate-x-1/2 rounded-xl ${isLogin ? 'top-20' : '-top-full'}`}>
        <div className="flex items-center justify-between border-b border-brand-gray-100 pt-6 pb-4 pl-7 pr-5">
          <h4 className="text-xl font-semibold text-brand-black-100">Welcome to Realton</h4>
          <button onClick={() => setIsLogin(false)} className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-gray-300 text-brand-black-100 hover:bg-brand-main hover:text-white transition-all duration-500">
            <FaTimes />
          </button>
        </div>

        <div className='pt-4 p-8'>
          <Tab.Group>
            <Tab.List className="flex items-center gap-1 mb-5">
              <Tab className={({ selected }) =>
                classNames(
                  'font-semibold py-2 px-4 border-b-2',
                  selected
                    ? '!border-brand-black-100 text-brand-black-100'
                    : 'hover:border-brand-black-100 text-brand-black-200 border-transparent'
                )
              }
              >Sign In</Tab>
              <Tab className={({ selected }) =>
                classNames(
                  'text-brand-black-200 font-semibold py-2 px-4 border-b-2 border-transparent',
                  selected
                    ? '!border-brand-black-100'
                    : 'hover:border-brand-black-100'
                )
              }>New Account</Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <SignIn />
              </Tab.Panel>
              <Tab.Panel>
                <SignUp />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  )
}