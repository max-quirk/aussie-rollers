import { Transition } from "@headlessui/react"
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline"
import { Fragment } from "react"

export function FaqButton({ open }: { open: boolean }) {
  return (
    <div className="relative h-6 w-6">
      <Transition
        show={!open}
        as={Fragment}
        enter="transition-opacity ease-in-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in-out duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <PlusIcon className="absolute h-6 w-6" aria-hidden="true" />
      </Transition>
      <Transition
        show={open}
        as={Fragment}
        enter="transition-opacity ease-in-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-in-out duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <MinusIcon className="absolute h-6 w-6" aria-hidden="true" />
      </Transition>
    </div>
  )  
}
