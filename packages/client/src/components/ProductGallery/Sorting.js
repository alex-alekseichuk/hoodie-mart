import {Menu, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/solid";
import React, {Fragment} from "react";

const sortings = [
  {value: "title-asc", title: 'Title - A to Z'},
  {value: "title-desc", title: 'Title - Z to A'},
  {value: "price-desc", title: 'Highest Price'},
  {value: "price-asc", title: 'Lowest Price'},
]

function sortingTitle(sorting) {
  const item = sortings.find(item => item.value === sorting)
  if (item) return item.title
}

export function Sorting({sorting, onChange}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex w-400 justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
        {sortingTitle(sorting)}
        <ChevronDownIcon
          className="ml-2 -mr-1 h-5 w-5"
          aria-hidden="true"
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div>
          <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {sortings.map((item, i) => (
                <Menu.Item key={i}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() => onChange(item.value)}
                    >
                      {item.title}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </div>
      </Transition>
    </Menu>
  )
}
