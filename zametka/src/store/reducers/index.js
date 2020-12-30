let initialState = {tasks: null, position: false}


const tasksReducer = (state = initialState, action ) => {
    switch (action.type) {

        case "DELETE_TASK": {
            return {...state, tasks: state.tasks.filter(e => e._id !== action.id)};
        }
        case "CREATE_TASK": {
            return {...state, tasks: [...state.tasks,{...action.task}]};
        }
        case "UPDATE_TITLE": {
            return {...state, tasks: state.tasks.map(e => {
                    if (e._id === action.id) {
                         e.title = action.title
                        return e
                    }
                    return e
                } )};
        }
        case "UPDATE_BODY": {
            return {...state, tasks: state.tasks.map(e => {

                    if (e._id === action.id) {
                         e.text = action.text
                        return e
                    }
                    return e
                } )};
        }
        case "UPDATE_OPACITY": {
            return {...state, position: action.opacity};
        }

        case "GET_TASKS" : {
            return {...state, tasks: [...action.tasks]}
        }
        default : return state
    }
}

export default tasksReducer