'use client'

import { useState, useRef, Fragment } from 'react'
import type { StaticImageData } from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'


interface ModalVideoProps {
  thumb: StaticImageData
  thumbWidth: number
  thumbAlt: string
  imageWidth: number
}

export default function ModalImage({
  thumb,
  thumbWidth,
  thumbAlt,
  imageWidth,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className='flex flex-warp flex-auto  bg-gray-100' >
    <Image className="flex-auto max-w-full mx-auto h-auto"  onClick={() => { setModalOpen(!modalOpen) }} src={thumb} width={thumbWidth}  alt={thumbAlt} />
      <Transition show={modalOpen} as={Fragment} afterEnter={() => videoRef.current?.play()}>
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
          <Transition.Child
            className="fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          <Transition.Child
            className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="max-w-6xl mx-auto h-full flex items-center">
              <Image
                className="flex-auto max-w-full mx-auto h-auto"
                onClick={() => { setModalOpen(!modalOpen) }} 
                src={thumb}
                width={imageWidth}
                alt={thumbAlt}
              />
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  )
}