import React, {useState} from "react";

import {NavLink} from "react-router-dom";
import src from "../../images/3335888.svg";
import "./style.css";
import Menu from '../menu'
import Header from '../Header'


let LeftBlock = ({tasks, deleteTask, updateTitle, upOpacity, createTask, path}) => {

    let [field, opacityField] = useState();

    async function create(e, text) {
        if (e.code === "Enter") {
            let res = await createTask(text)
            path.push(`/task/${res.task._id}`);
            opacityField(false);
        }
    }


    return (
        <div className={"leftBlock"}>
            <Header opacityField={opacityField} create={create} field={field}/>
            <ul className="listTask">
                {tasks
                    ? tasks.map((elem, index) => {
                        return (
                            <li key={elem._id}>
                                <NavLink className="link" activeClassName="linkTask" to={`/task/${elem._id}`}>
                                    {elem.title}
                                    <Menu updateTitle={updateTitle} deleteTask={deleteTask} upOpacity={upOpacity}
                                          path={path} elem={elem}/>
                                </NavLink>
                            </li>
                        );
                    })
                    : null}
            </ul>
        </div>
    );
};
export default LeftBlock;
