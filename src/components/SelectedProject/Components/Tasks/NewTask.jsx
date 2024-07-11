import { useState } from "react"

function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("")

  function handleChange(e) {
    setEnteredTask(e.target.value)
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return
    }
    onAdd(enteredTask)
    setEnteredTask("")
  }
  return (
    <div className="flex items-center gap-4 mt-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-100 text-stone-600"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        onClick={handleClick}
        className="bg-stone-500/75 py-1 px-2 rounded-sm text-stone-100 hover:bg-stone-800 duration-200 transition-all ease-out"
      >
        Add Task
      </button>
    </div>
  )
}

export default NewTask
