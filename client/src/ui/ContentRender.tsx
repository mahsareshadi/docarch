import "../css/ContentRender.css";
import { ReactNode } from "react";
import {TodoApp} from './TodoApp'

import { User } from "../../../common/src/User";
interface Props{
  userinfo:User,
}

export function CreateContent({ title, children }: { title: string, children: ReactNode }) {
  return (

    <div className="container">
      <div className="content  active-content">
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </div>
  )
}

export function FileRender() {

  return (
    <>
      <div className="content-tabs">
        <CreateContent title="INBOX">
          <hr />
          file list
        </CreateContent>
      </div>
    </>
  );

}
export function TaskRender({ userinfo }:Props) {
  return (
    <div className="content-tabs">
      <CreateContent title="TASKS">
        <hr />
        <TodoApp userinfo={userinfo} />
      </CreateContent>
    </div>
  )
}
