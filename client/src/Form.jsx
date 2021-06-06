import React from 'react';
import './css/todolist.css';

function Form() {
    return (
        <form>
            
            <input type="text" className="todo-input" />
            <button className="todo-button , form-btn" type="submit">
            <i class="fa">&#xf0fe;</i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );

}
export default Form;