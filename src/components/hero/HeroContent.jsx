'use client'
import { Listbox, Tab, Transition } from '@headlessui/react'
import Image from 'next/image';
import React, { Fragment, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { RiHome6Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import Settings from "../../../public/settings.png"

const tabs = [
  { id: "buy", label: "Buy" },
  { id: "rent", label: "Rent" },
  { id: "sold", label: "Sold" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const category = [
  { value: "Apartments", label: "Apartments" },
  { value: "Bungalow", label: "Bungalow" },
  { value: "Houses", label: "Houses" },
  { value: "Loft", label: "Loft" },
  { value: "Office", label: "Office" },
  { value: "Townhome", label: "Townhome" },
  { value: "Villa", label: "Villa" },
];

const HeroContent = () => {
  const [selectedCategory, setSelectedCategory] = useState(category[0].label)

  return (
    <div className='max-w-[796px] w-full relative z-20 '>
      <Tab.Group>
        <Tab.List className="max-w-[240px] w-full flex items-center justify-center gap-2.5 bg-white border-b border-brand-gray-200 rounded-t-xl">
          {tabs.map(((tab,idx) => (
            <Tab key={idx} className={({selected}) => classNames('text-brand-black-100 text-sm capitalize font-semibold leading-6 text-center border-b-2 px-3 py-4',
            selected ? 'border-brand-black-100' : 'border-transparent')}>{tab.label}</Tab>
          )))}
        </Tab.List>
        <Tab.Panels>
          {tabs.map((tab,idx) => (
            <Tab.Panel key={idx} className="bg-white relative rounded-b-xl rounded-tr-xl p-5 pr-0">
              <div className='grid md:grid-cols-12 items-center gap-6 pr-2.5 md:pr-0'>
                <form className='md:col-span-5 lg:col-span-4 flex items-center rounded-xl bg-brand-gray-300 py-1.5 px-3 pl-5 gap-4 h-14'>
                  <RiHome6Line />
                  <input className='w-full h-full bg-transparent outline-none text-sm' type="text" name="search" placeholder={`Enter Keyword for ${tab.label}`} />
                </form>
                <div className='md:col-span-3 lg:col-span-4'>
                  <Listbox value={selectedCategory} onChange={setSelectedCategory}>
                    <div className="relative">
                      <Listbox.Button className="relative w-full flex items-center justify-start bg-brand-gray-300 py-1.5 px-3 rounded-xl h-14">
                        <span className="truncate text-sm text-brand-black-100">{selectedCategory}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center h-full pr-4">
                          <IoIosArrowDown className='text-brand-gray-400 hover:text-brand-gray-100' />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                          {category.map((item, itemIdx) => (
                            <Listbox.Option
                              key={itemIdx}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-2 pr-4 hover:bg-brand-main/20 hover:text-brand-black-100 ${
                                  active ? 'bg-brand-main text-white' : 'text-brand-black-100'
                                }`
                              }
                              value={item.label}
                            >
                              <span className="block truncate">
                                {item.label}
                              </span>
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <div className='md:col-span-4 flex items-center justify-start md:justify-center gap-6'>
                  <button className='flex items-center gap-2.5 md:px-1.5'>
                    <Image width={14} height={14} src={Settings} alt='settings'/>
                    <span className='text-brand-black-100 text-sm font-semibold'>Advanced</span>
                  </button>
                  <button className='flex items-center btn-search relative overflow-hidden justify-center bg-brand-main w-14 h-14 rounded-xl hover:z-20'>
                    <FiSearch  className='text-white w-4 h-4' />
                  </button>
                </div>
              </div>  
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default HeroContent