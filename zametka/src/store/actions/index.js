



export const updateBodyAC = (id, text) => ({type: "UPDATE_BODY",id, text} )
export const updateTitleAC = (id, title) => ({type: "UPDATE_TITLE", id, title} )
export const opacity = (opacity) => ({type: "UPDATE_OPACITY", opacity} )
export const deleteTaskAC = (id) => ({type: "DELETE_TASK", id} )
export const createTaskAC = (task) => ({type: "CREATE_TASK", task} )
export let getTasksAC = (tasks) =>  ({type: "GET_TASKS", tasks})
