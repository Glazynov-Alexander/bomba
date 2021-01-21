import React, {useState, useCallback} from "react";
import "./style.css";

let Menu = ({deleteTask, updateTitle, upOpacity, path, elem}) => {

    let [text, setText] = useState();
    let [menu, upMenu] = useState();

    async function upTitle(e, text, id) {
        if (e.code === "Enter") {
            await updateTitle(id, text);
            setText();
        }
        if (e.type === "blur") {
            setText(false)
            upMenu(elem._id)
        }

    }

    let openMenu = useCallback((id) => {
        upMenu(menu === id ? false : id);
        path.push(`/task/${id}`);
    }, [path, menu]);

    document.addEventListener("click", function (event) {
        if ( menu && event.target.className !== "menuClick" && event.target.localName !== "li") {
            upMenu(false);
        }
    });


    return (<div>
            <div className="menuToggle"/>
            <div
                className="menuClick"
                onClick={(e) => openMenu(elem._id)}
            >

                {menu === elem._id || text ? (

                    <ul className="menu">

                        <li onClick={(e) => deleteTask(elem._id)}>
                            <p>delete task</p>
                        </li>
                        <li onClick={ e =>upOpacity(true)}>
                            <p>update text</p>
                        </li>
                        <li onClick={(e) => setText(elem._id)}>
                            {text === elem._id ? (
                                <input
                                    className="updateTitle"
                                    onBlurCapture={(e) => upTitle(e, e.target.value, elem._id)}
                                    autoFocus={true}
                                    onKeyDown={(e) => upTitle(e, e.target.value, elem._id)}
                                    defaultValue={elem.title}
                                />
                            ) : (
                                <p>
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
