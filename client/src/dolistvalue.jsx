import React from 'react';
import './css/todolist.css'
function Todo({ text, todo, todos, setTodos }) {
    function deleteHandler() {
        setTodos(todos.filter(el => el.id !== todo.id));
    }

    function completeHandler() {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
           return item;
        }

        ));
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : " "}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">&#10004;</button>
            <button onClick={deleteHandler} className="trash-btn">&#10008;</button>
        </div>
    );
}

export default Todo;