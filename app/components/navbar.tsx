import { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#Home'},
  { name: 'Projects', href: '#Projects' },
  { name: 'Contacts', href: '#Contacts' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [selectedItem, setSelectedItem] = useState(null)
    const handleClick = (name: any) => {
      setSelectedItem(name)
    }
        return (
        <Disclosure as="nav" className="fixed w-full border-gray-200 dark:bg-[#282828] border-b-[1px]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[#fcf0ca]">Kayc farias</span>
            </a>
            <DisclosureButton className="group inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-[#fcf0ca] dark:hover:bg-[#3c3835] dark:focus:ring-[#3c3835]">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden"/>
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
            
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-[#282828] md:bg-[#282828] dark:border-gray-700">
            {navigation.map((item, index) => (
                <li key={index}>
                    <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleClick(item.name)}
                    aria-current={selectedItem == item.name ? 'true' : undefined}
                    className={classNames(
                          selectedItem == item.name ? 'bg-[#928374] text-[#1d2021]' : 'text-[#fcf0ca] hover:bg-[#3c3835] hover:text-white',
                      'block rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300',
                    )}
                  >
                    {item.name}
                  </a>
                </li>
                ))}
                
                {/*<li> 
                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                </li>*/}
            </ul>
            </div>
        </div>
        <Transition appear={true}>
        <DisclosurePanel className="md:hidden data-[closed]:opacity-0 data-[closed]:h-0 transition-all duration-300 ease-in-out">
            <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
                <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                onClick={() => handleClick(item.name)}
                aria-current={selectedItem == item.name ? 'true' : undefined}
                className={classNames(
                    selectedItem == item.name ? 'bg-[#928374] text-[#1d2021]' : 'text-gray-300 hover:bg-[#3c3835] hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                )}
                >
                {item.name}
                </DisclosureButton>
            ))}
            </div>
        </DisclosurePanel>
        </Transition>
        
        </Disclosure>

    )
}