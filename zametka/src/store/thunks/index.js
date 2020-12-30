import {updateBodyAC, getTasksAC, updateTitleAC, createTaskAC, deleteTaskAC} from "../actions/index";
import {updateBodyAPI, updateTitleAPI, getTasksAPI, createTaskAPI, deleteTaskAPI} from "../API";

export let updateBody = (id, text) => {
    return async (dispatch) => {
        await updateBodyAPI(id, text);
        return dispatch(updateBodyAC(id, text));
    };
};

export let updateTitle =  (id, text) => {
    return  async (dispatch) => {
        await updateTitleAPI(id, text);
        return dispatch(updateTitleAC(id, text));
    };
};

export function getTasksState  ()  {
  return async (dispatch) => {
    let tasks = await getTasksAPI();
    return dispatch(getTasksAC(tasks.data));
  };
}

export function createTask  (title)  {
  return async (dispatch) => {
    let tasks = await createTaskAPI(title);
    return dispatch(createTaskAC(tasks.data.task));
  };
}
export function deleteTask  (id)  {
  return async (dispatch) => {
     await deleteTaskAPI(id);
    return dispatch(deleteTaskAC(id));
  };
}

