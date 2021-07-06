import React from 'react';
import { getUserId, saveUsersFile} from '../api';
import "../css/users.css";
// import { User } from '../../../common/src/User';
// import { getAllUsers } from "../api/index";
// import { Alluser } from "./User"
import { useState, FormEvent, ChangeEvent } from 'react';
interface Props {
  fileid: number,
  setUsers: any
}
export function Users({ fileid }: Props) {
  const [user, setUser] = useState<string>("")

  function handlechange(event: ChangeEvent<HTMLInputElement>) {
    setUser(event.target.value);
  }

  function sendUser(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    // saveUsersFile(4,8);
    getUserId(user,fileid)
    .then((response)=>{
      saveUsersFile(fileid,response.data)
    })

  }

  return (
    <div className="main-container">
      <span className="h2"><b>USERS</b></span>
      <hr className="hr"></hr>
      <form className="user-container">
        <input id="username" onChange={handlechange} placeholder="type username here" type="text" />
        <button id="send-btn" onClick={sendUser} type="submit">SEND</button>
      </form>
      <div className="users">
        <ul>
          <li>mahsareshadi</li>
          <li>minooathari</li>
          <li>aliahmadi</li>
          <li>maryam_moradi</li>
          <li>mahsa.ziarati</li>
        </ul>
        <ul>
          <li>sedighzia</li>
          <li>alireza_zamani</li>
          <li>shaghayegh-af</li>
          <li>mina_ngh</li>
          <li>alireshadi</li>
        </ul>
      </div>
    </div>
  )
}
