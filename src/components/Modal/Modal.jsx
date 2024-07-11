import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

const Modal = forwardRef(function Modal({ children, buttonLabel }, ref) {
  const dialog = useRef()
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal()
      },
    }
  })

  return createPortal(
    <dialog
      ref={dialog}
      className='backdrop:bg-stone-900/80 p-4 rounded-md shadow-md backdrop:backdrop-blur-sm'
    >
      {children}
      <form
        method='dialog'
        className='text-right mt-4'
      >
        <button className='px-5 py-1 bg-stone-800/70 text-white rounded-md hover:bg-stone-800/100 transition-all duration-150 ease-out'>
          {buttonLabel}
        </button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  )
})

export default Modal
