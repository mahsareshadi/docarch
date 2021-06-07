import React, { useState, useEffect } from 'react';
import DolistInput from './DolistFormInput.jsx';
import DoList from './DoList.jsx';

function TodoList() {

    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);


    useEffect(() => {
        function filterHandler() {
            switch (status) {
                case 'completed': setFilteredTodos(todos.filter(todo => todo.completed === true))
                    break;
                case 'uncompleted': setFilteredTodos(todos.filter(todo => todo.completed === false))
                    break;
                default:
                    setFilteredTodos(todos);
                    break;
            }
        }
        filterHandler();
    }, [todos,status]);



    return (
        <>
            <DolistInput inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                setInputText={setInputText}
                setStatus={setStatus}
                
            >
            </DolistInput>

            <DoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}></DoList>

        </>
    )
};
export default TodoList;