import "./App.css";
import React, { useCallback, useEffect } from "react";
import { Route } from "react-router-dom";
import LeftBlock from "./Components/left-Block";
import RightBlock from "./Components/right-block";
import { connect, useSelector } from "react-redux";
import { opacity } from "./store/actions";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import {
  updateBody,
  updateTitle,
  createTask,
  getTasksState,
  deleteTask,
} from "./store/thunks/index";

function App({
  deleteTask,
  updateTitle,
  createTask,
  getTasksState,
  opacity,
  updateBody,
  ...path
}) {
  let props = useSelector((state) => ({
    tasks: state.tasks.tasks,
    position: state.tasks.position,
  }));

  useEffect( () => {
    if (!props.tasks) {
      return  getTasksState().then(res => res);
    }
  }, [props.tasks, getTasksState]);

  let idTask = useCallback(() => {
    let id = path.location.pathname;
    if (id) {
      return id.replace("/task/", "");
    }
  }, [path.location.pathname]);

  return (
    <div className="App">
      <LeftBlock
        createTask={createTask}
        upOpacity={opacity}
        tasks={props.tasks}
        updateTitle={updateTitle}
        deleteTask={deleteTask}
        path={path.history}
      />
        {props.tasks ? <Route
            path={`/task/:id`}
            render={() => (
                <RightBlock
                    upBody={updateBody}
                    upOpacity={opacity}
                    position={props.position}
                    task={
                        props.tasks
                            ? props.tasks.filter((elem) => elem._id === idTask())
                            : null
                    }
                />
            )}
        /> : null}
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks,
    position: state.tasks.position,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    updateTitle,
    deleteTask,
    opacity,
    getTasksState,
    updateBody,
    createTask,
  })
)(App);
