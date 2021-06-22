import React, { ChangeEvent, MouseEvent, useRef } from 'react';
import { Task } from '../../../common/src/Task';
import { User } from '../../../common/src/User';
import '../css/todolist.css';

interface Props {
  userinfo: User,
  inputText: string,
  setInputText(text: string): void,
  todo: Task[],
  setTodo(task: Task[]): void
}

function DolistInput({ userinfo, inputText, setInputText, todo, setTodo }: Props) {

  // function inputTextHandler(e: ChangeEvent<HTMLInputElement>): void {
  //   setInputText(e.target.value);
  // }

  let textInput = useRef<HTMLInputElement>(null);
  function addTask(e: any) {
    e.preventDefault();
    if (textInput.current) {
      setInputText(textInput.current.value);
      console.log(inputText)
    }

    const newTask = { taskid: 6, task: inputText, userid: userinfo.userid }
    setTodo([...todo, newTask]);
    setInputText("");
  }


  return (

    <form>
      <input ref={textInput} type="text" className="todo-input" />

      <button onClick={addTask} className="todo-button , form-btn" type="submit">
        <i className="fa">&#xf0fe;</i>
      </button>
    </form>

  );

}


export default DolistInput;