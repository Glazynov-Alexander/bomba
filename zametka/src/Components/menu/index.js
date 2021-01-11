import React, { useState, useCallback } from "react";
import src from "../../images/3335888.svg";
import "./style.css";

let Menu = ({ deleteTask, updateTitle, upOpacity, path,elem}) => {

    let [text, setText] = useState();
    let [menu, upMenu] = useState();

    async function upTitle(e, text, id) {
        if (e.code === "Enter" || e.type === "blur") {
            await updateTitle(id, text);
            setText();
        }
    }

    let openMenu = useCallback(  (id) => {

        upMenu(menu === id ? false : id);
        path.push(`/task/${id}`);
    });

    document.addEventListener("click", function(e) {
        if (e.target.className !== "menuClick") {
            upMenu(false);
        }
    });

    let deleteTaskPath = (id) => {
        // path.push(`/task`);
        path.go(`/task`);
        deleteTask(id);
    };

    return (<div>
            <div className="menuToggle"></div>
            <div
                className="menuClick"
                onClick={(e) => openMenu(elem._id)}
            >

                {menu === elem._id ||text ? (

                    <ul  className="menu">

                        <li onClick={(e) => deleteTaskPath(elem._id)}>
                            <p >
                                delete task
                            </p>
                        </li>
                        <li onClick={(e) => upOpacity(true)}>
                            <p >update text</p>
                        </li>
                        <li onClick={(e) =>   setText(elem._id)}>
                            {text === elem._id ? (
                                <input
                                    onBlurCapture={(e) => upTitle(e, e.target.value, elem._id)}
                                    autoFocus={true}
                                    onKeyDown={(e) => upTitle(e, e.target.value, elem._id)}
                                    defaultValue={elem.title}
                                />
                            ) : (
                                <p >
                                    update title
                                </p>
                            )}
                        </li>
                    </ul>
                ) : null}
            </div>
        </div>

    );
};
export default Menu;
