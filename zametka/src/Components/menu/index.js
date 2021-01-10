import React, {useState} from "react";
import src from "../../images/3335888.svg";
import "./style.css";

let Menu = ({deleteTask, updateTitle, upOpacity, path, elem}) => {

    let [text, setText] = useState();

    let [menu, upMenu] = useState();

    async function upTitle(e, text, id) {
        if (e.code === "Enter" || e.type === "blur") {
            await updateTitle(id, text);
            setText();
        }
    }

    let openMenu = (id) => {

        upMenu(menu === id ? false : id);
        path.push(`/task/${id}`);
    };


    let deleteTaskPath = (id) => {
        // path.push(`/task`);
        path.go(`/task`);
        deleteTask(id);
    };


    return (

        <div
            className="menuClick"
            onClick={(e) => openMenu(elem._id)}
        >
            <div className="menuToggle"></div>
            {menu === elem._id ? (

                <ul className="menu">

                    <li>
                        <p onClick={(e) => deleteTaskPath(elem._id)}>
                            delete task
                        </p>
                    </li>
                    <li>
                        <p onClick={(e) => upOpacity(true)}>update text</p>
                    </li>
                    <li>
                        {text === elem._id ? (
                            <input
                                onBlurCapture={(e) =>
                                    upTitle(e, e.target.value, elem._id)
                                }
                                autoFocus={true}
                                onKeyDown={(e) =>
                                    upTitle(e, e.target.value, elem._id)
                                }
                                defaultValue={elem.title}
                            />
                        ) : (
                            <p onClick={(e) => setText(elem._id)}>
                                update title
                            </p>
                        )}
                    </li>
                </ul>
            ) : null}
        </div>
    );
};
export default Menu;
