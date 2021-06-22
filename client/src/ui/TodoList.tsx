import React, { ReactElement, useState } from 'react';
import DolistInput from './DolistFormInput';
import DoList from './DoList';
import {Task} from "../../../common/src/Task";
import { User } from '../../../common/src/User';

interface Props{
  userinfo:User;
}
function TodoList({ userinfo }: Props) : ReactElement{

  const [inputText, setInputText] = useState<string>("");
  const [todo, setTodo] = useState<Task[]>([]);
  return (
    <>
      <DolistInput
        userinfo={userinfo}
        inputText={inputText}
        setInputText={setInputText}
        todo={todo}
        setTodo={setTodo}
       />
      {/* <DoList setTodo={setTodo} todo={todo} ></DoList> */}
    </>
  )
};
export default TodoList;