import React from 'react';
import Todo from './Todo';

function DoList({ todos, setTodos ,filteredTodos}) {
    console.log(todos);
    return (
        <div className="todo-container">
            <ul className='todo-list'>
                {filteredTodos.map(todo => (
                    <Todo
                       
                        text={todo.text}
                        setTodos={setTodos}
                        todos={todos}
                        key={todo.id}
                        todo={todo}
                        />
                ))}
            </ul>
        </div>


    );
}

export default DoList;
