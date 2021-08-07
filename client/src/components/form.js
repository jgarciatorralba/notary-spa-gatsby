import * as React from "react"

import "../styles/components/form.scss"

const Form = () => {
  function handleSubmit(e) {
    e.preventDefault()
    console.log("submit!")
  }

  return (
    <div className="section-form mb-4">
      <form
        onSubmit={handleSubmit}
      >
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Jane"
        />

        <button
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Form
