import "./App.css";
import React, {useCallback, useEffect, useState} from "react";
import {Route} from "react-router-dom";
import LeftBlock from "./Components/left-Block";
import RightBlock from "./Components/right-block";
import {connect, useSelector} from "react-redux";
import {opacity} from "./store/actions";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
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


    useEffect(() => {
        if (!path.tasks.length) {
              getTasksState();
        }
    }, [path.tasks.length]);

    return (
        <div className="App">
            <LeftBlock
                createTask={createTask}
                upOpacity={opacity}
                tasks={path.tasks}
                updateTitle={updateTitle}
                deleteTask={deleteTask}
                path={path.history}
            />
            {path.tasks.length ? <Route
                path={`/task/:id`}
                render={() => (
                    <RightBlock
                        upBody={updateBody}
                        upOpacity={opacity}
                        position={path.position}
                        task={
                            path.tasks
                                ? path.tasks.filter((elem) => elem._id === path.location.pathname.replace("/task/", ""))
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
