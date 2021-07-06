import React from 'react'
import { User } from '../../../common/src/User'

interface Props {
  user: User;

}
export function Alluser({ user }: Props) {


  return (
    <div className="todo">
      <li className="todo-item">
        {" " + user.firstname + " " + user.lastname}
      </li>
      <button className="done-btn">&#10004;</button>
    </div>
  )
}

