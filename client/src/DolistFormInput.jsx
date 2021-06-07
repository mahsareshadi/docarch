import React from 'react';
import './css/todolist.css';
import uuid from 'react-uuid';

function DolistInput({ setInputText, todos, setTodos, inputText, setStatus }) {
    function inputTextHandler(e) {
        setInputText(e.target.value);

    }
    function submitTodoHandler(e) {
        e.preventDefault();
        setTodos([...todos,
        { text: inputText, completed: false, id: uuid() }]);

        setInputText("");
    }
    function statusHandler(e) {
        setStatus(e.target.value);
    }

    return (

        <form>

            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button , form-btn" type="submit">
                <i className="fa">&#xf0fe;</i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>

    );

}


export default DolistInput;