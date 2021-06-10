import React , {useState} from 'react';
// import {Link} from 'react-router-dom';
import './css/Tabnew.css';

function CreateTabHeader(props){
    
    return (
        <div className="btn-container">
        <button className="tab-btn">{props.children}</button>
        </div>
    );
}

function TabHeader(){
    // const [toggleState, setToggleState] = useState(1);

    // const toggleTab = (index) => {
    //     setToggleState(index);
    // };
    return(
        <div className="btn-container">
        <CreateTabHeader>FILES</CreateTabHeader>
        <CreateTabHeader>TASKS</CreateTabHeader>
        </div>
    );
}

export default TabHeader;