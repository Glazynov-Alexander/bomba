import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import src from "../../images/3335888.svg";
import "./style.css";

let LeftBlock = ({
  tasks,
  deleteTask,
  updateTitle,
  upOpacity,
  createTask,
  path,

}) => {
  let [text, setText] = useState();
  let [field, opacityField] = useState();
  let [menu, upMenu] = useState();

  async function upTitle(e, text, id) {
    if (e.code === "Enter" || e.type === "blur") {
      await updateTitle(id, text);
      setText("");
    }
  }

  let openMenu = (id) => {
    // if (path.location.pathname.replace("/task/", "")) {
      upMenu(menu === id ? false : id);
      path.push(`/task/${id}`);
    // }
    //   upMenu(menu === id ? false : id);
    //   path.push(`/task/${id}`);
  };

  async function create(e, text) {
    if (e.code === "Enter") {
      await createTask(text).then(res => {
          path.push(`/task/${res.task._id}`);
      });
      opacityField(false);
    }
  }

  let deleteTaskPath = (id) => {
    path.push(`/task`);
    return deleteTask(id);
  };

  return (
    <div className={"leftBlock"}>
      <div className="header">
        <div className="bool">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <img
          onClick={(e) => opacityField(true)}
          style={{ width: "30px" }}
          src={src}
          alt=""
        />

        {field ? (
          <div
            onBlurCapture={(e) => opacityField(false)}
            onKeyDown={(e) => create(e, e.target.value)}
            style={{ position: "fixed" }}
          >
            <input autoFocus={true} type="text" placeholder={"title"} />
          </div>
        ) : null}
      </div>

      <div className="listTask">
        <ul>
          {tasks
            ? tasks.map((elem, index) => {
                return (
                  <li key={elem._id}>
                    <NavLink className="link"
                      activeClassName="linkTask" 
                      to={`/task/${elem._id}`}
                    >
                      {elem.title}
                      <div
                      className="menuClick"
                      onClick={(e) => openMenu(elem._id)}
                    >
                      <div className="menuToggle"></div>
                      {menu === elem._id || text === elem._id ? (
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
                    </NavLink>
                   
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
};
export default LeftBlock;
