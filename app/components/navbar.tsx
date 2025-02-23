import Toggle from './toggle';
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

type NavigationItem = {
  name: string;
  href: string;
  id: string;
};

interface NavbarProps {
  navigation: NavigationItem[];
  selectedItem: string;
  handleClick: (name: string) => void;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
}


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar(props: NavbarProps) {
  return (
    <Disclosure as="nav" className="fixed w-screen light-background dark:dark-background shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[#ffffff]">Kayc farias</span>
        </a>
        <DisclosureButton className="group inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:text-[#000000] dark:hover:bg-grey dark:focus:ring-[#3E0C0F]">
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
          <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
        </DisclosureButton>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
            {props.navigation.map((item: NavigationItem, index: number) => (
              <li key={index}>
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={props.selectedItem == item.name ? 'true' : undefined}
                  className={classNames(
                    props.selectedItem == item.name
                      ? 'bg-[#FF5A5F] text-[#ffffff] dark:bg-[#5A0001] dark:text-white'
                      : 'dark:dark-background hover:bg-[#F5A2AA] hover:text-black dark:hover:bg-[#3E0C0F] dark:hover:text-white',
                    'block shadow-custom rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300',
                  )}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <Toggle />
          </ul>
        </div>
      </div>
      <Transition appear={true}>
        <DisclosurePanel className="md:hidden data-[closed]:opacity-0 data-[closed]:h-0 transition-all duration-300 ease-in-out">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {props.navigation.map((item: NavigationItem) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                onClick={() => props.handleClick(item.name)}
                aria-current={props.selectedItem == item.name ? 'true' : undefined}
                className={classNames(
                  props.selectedItem == item.name
                    ? 'bg-[#FF5A5F] text-[#ffffff] dark:bg-[#5A0001] dark:text-white'
                    : 'dark:dark-background hover:bg-[#F5A2AA] hover:text-black dark:hover:bg-[#3E0C0F] dark:hover:text-white',
                  'block shadow-custom rounded-md px-3 py-2 text-base font-medium',
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
            <Toggle />
          </div>
        </DisclosurePanel>
      </Transition>
    </Disclosure>
  );
}