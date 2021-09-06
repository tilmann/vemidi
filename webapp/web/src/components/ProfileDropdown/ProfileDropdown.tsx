import { Menu, Transition } from '@headlessui/react'
import { useAuth } from '@redwoodjs/auth'
import { Fragment } from 'react'
const profile = ['Profile', 'Einstellungen']

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ProfileDropdown = ({ open }) => {
  const { currentUser, logOut } = useAuth()
  console.log(currentUser)
  return (
    <Menu as="div" className="ml-3 relative flex-shrink-0">
      {({ open }) => (
        <>
          <div className="inline-block">{currentUser?.email}</div>
          <div className="inline-block">
            <Menu.Button className="bg-indigo-600 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
              <span className="sr-only">Open user menu</span>
              <img
                className="rounded-full h-8 w-8"
                src="https://pbs.twimg.com/profile_images/1267542534886211585/l5TVqpTw_400x400.jpg"
                alt=""
              />
            </Menu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              {profile.map((item) => (
                <Menu.Item key={item}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block py-2 px-4 text-sm text-gray-700'
                      )}
                    >
                      {item}
                    </a>
                  )}
                </Menu.Item>
              ))}
              <Menu.Item key="logout">
                <a
                  href="#"
                  onClick={async (e) => logOut()}
                  className={classNames(
                    'block py-2 px-4 text-sm text-gray-700'
                  )}
                >
                  Logout
                </a>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default ProfileDropdown
