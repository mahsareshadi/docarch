import React from 'react'
import { useState } from 'react';
// import { Link,Switch ,Route,BrowserRouter as Router} from 'react-router-dom';
import { File } from '../../../common/src/File'
import { Users } from './Users';

interface Props {
  file: File
}
export function Filename({ file }: Props) {
  const [users, setUsers] = useState("");
  let href = `"../../../server/Upload/${(file.address).split("fakepath\\")[1]}`

  return (
    <>
      <div className="todo">
        <li className="todo-item">
          {(file.address).split("fakepath\\")[1]}
        </li>

        <a href={href} download>
          <button className="download-btn">&#8681;</button></a>
        <button onClick={() => { setUsers("showuser") }} className="send-btn">&#8680;</button>
      </div>
      {users === "showuser" && <Users setUsers={setUsers} fileid={file.fileid} />}
    </>
  )
}
