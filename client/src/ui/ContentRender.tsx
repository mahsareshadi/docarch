import "./css/ContentRender.css";
import TodoList from './TodoList';
import axios from 'axios';
import { ReactNode } from "react";

export function CreateContent({ title, children }:{title: string, children: ReactNode}) {
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

export function TaskRender({ userinfo }:number) {
    axios
    .get('http://localhost:5000/getTask'
    , {
      userId : userinfo.userid
    })
    .then((response)=>console.log(response));
    
    return (
        <div className="content-tabs">
            <CreateContent title="TASKS">
                <hr />
                <TodoList userinfo={userinfo}></TodoList>
            </CreateContent>
        </div>
    )
}
