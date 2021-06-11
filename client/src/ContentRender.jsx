import "./css/ContentRender.css";
import TodoList from './Todolist';

export function CreateContent({ title, children }) {
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

export function TaskRender({ userinfo }) {
    return (
        <div className="content-tabs">
            <CreateContent title="TASKS" tag='<hr />'>
                <hr />
                <TodoList userinfo={userinfo}></TodoList>
            </CreateContent>
        </div>
    )
}
