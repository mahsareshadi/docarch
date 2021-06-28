
import React from 'react';
import '../css/todolist.css'
function Todo({ text, todo, todos, setTodos }: any) {
  function deleteHandler() {
    setTodos(todos.filter((element: any) => element.id !== todo.id));
  }


  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button onClick={deleteHandler} className="trash-btn">&#10008;</button>
    </div>
  );
}

export default Todo;