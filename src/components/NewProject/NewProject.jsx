import { useRef } from 'react'
import Input from './components/Input'
import Modal from '../Modal/Modal'

function NewProject({ onAdd, onCancel }) {
  const modal = useRef()

  const title = useRef()
  const description = useRef()
  const dueDate = useRef()

  function handleSave() {
    const enteredTitle = title.current.value
    const enteredDescription = description.current.value
    const enteredDueDate = dueDate.current.value

    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
      modal.current.open()
      return
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    })
  }

  return (
    <>
      <Modal
        ref={modal}
        buttonLabel='Close'
      >
        <h2 className='text-xl font-bold my-4 text-stone-800'>Invalid Input</h2>
        <p className='my-2 text-base text-stone-600'>Oops... Looks like you forgot to enter a value</p>
        <p className='my-2 text-base text-stone-600'>Please provide a valid value for the input fields</p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <button
              className='text-stone-800 hover:text-black'
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className='bg-stone-800 text-stone-50 hover:bg-black px-5 py-2 rounded-md'
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input
            ref={title}
            label='Title'
            type='text'
          />
          <Input
            ref={description}
            label='Description'
            textArea
          />
          <Input
            ref={dueDate}
            type='date'
            label='Due Date'
          />
        </div>
      </div>
    </>
  )
}

export default NewProject
