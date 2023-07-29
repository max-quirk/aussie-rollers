import { Disclosure, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { FaqButton } from "./FaqButton"
import { useContentful } from "contexts/contentful/ContentfulContext"

export function FaqListing() {
  const { pageSpecificContent: homePageContent } = useContentful()
  const [openId, setOpenId] = useState<number | null>()
  const toggleDisclosure = (id: number) => () => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      {homePageContent.faqs.map(({ question: q, answer: a}, index) => (
        <Disclosure as="div" key={index}>
          {() => {
            const isOpen = openId === index
            return (
              <div className="stroke-tertiary border-t">
                <Disclosure.Button
                  className="w-full py-8 outline-none"
                  onClick={toggleDisclosure(index)}
                >
                  <>
                    <div className="text-primary flex w-full items-center justify-between gap-6 text-start text-lg font-medium">
                      {q}
                      <FaqButton open={isOpen} />
                    </div>

                    <Transition
                      show={isOpen}
                      as={Fragment}
                      enter="transition-all ease-in-out duration-300"
                      enterFrom="max-h-0 overflow-hidden opacity-0"
                      enterTo="max-h-[1000px] overflow-hidden opacity-100"
                      leave="transition-all ease-in-out duration-300"
                      leaveFrom="max-h-[1000px] overflow-hidden opacity-100"
                      leaveTo="max-h-0 overflow-hidden opacity-0"
                    >
                      <Disclosure.Panel className="mt-4 cursor-default pr-12 text-start text-grey-600 dark:text-slate-200">
                        {a}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                </Disclosure.Button>
              </div>
            )
          }}
        </Disclosure>
      ))}
    </div>
  )
}
