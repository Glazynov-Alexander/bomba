import "./App.css";
import React, {useCallback} from "react";
import { Route } from "react-router-dom";
import LeftBlock from "./Components/left-Block";
import RightBlock from "./Components/right-block";
import { connect } from "react-redux";
import { opacity } from "./store/actions";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import {
  updateBody,
  updateTitle,
  createTask,
  getTasksState,
    deleteTask
} from "./store/thunks";

function App({
  tasks,
  updateNum,
  deleteTask,
  updateTitle,
  opacity,
  position,
  createTask,
  updateBody,
  ...path
}) {
  if (!tasks) {
    path.getTasksState().then((res) => res);
  }
  let idTask = useCallback(() => {

    let id = path.location.pathname;
  // .match(/[^/task]/gi)
    if(id) {
        return  id.replace('/task/', '')
    }
  }, [path.location.pathname]);

  return (
    <div className="App">
      <LeftBlock
        createTask={createTask}
        upOpacity={opacity}
        updateNum={updateNum}
        tasks={tasks}
        updateTitle={updateTitle}
        deleteTask={deleteTask}
        path={path.history}
      />
      <Route
        path={`/task/:id`}
        render={() => (
          <RightBlock
            upBody={updateBody}
            upOpacity={opacity}
            position={position}
            task={tasks ? tasks.filter((elem) => elem._id === idTask() ) : null}
          />
        )}
      />
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
  connect(mapStateToProps, {
    updateTitle,
    deleteTask,
    opacity,
    createTask,
    updateBody,
    getTasksState,
  }),
  withRouter
)(App);
