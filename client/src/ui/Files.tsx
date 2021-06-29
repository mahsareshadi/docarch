import React from 'react'
import '../css/File.css'
export function Files() {
  

  return (
    <>
      {/* INPUT */}
      <form className="Uploadform">
        <input  type="file" placeholder="Type Your Task Here ..." className="file-upload"  accept=".pdf,.docx,.doc"/>
      <label>
          CHOOSE .pdf,.docx,.doc
        </label>
        </form>
      
      {/* LIST */}

      <div className="list-of-todos">
        {/* <button onClick={showtask}>show my task</button> */}
        <div className="todo-container">
          <ul className='todo-list'>
          </ul>
        </div>
      </div>
    </>
  )
}
