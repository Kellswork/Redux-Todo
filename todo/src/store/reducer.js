import { ADD_TODO, IS_TODO_COMPLETED } from './action';

const initialState = {
    todoList: [],
    isCompleted: false,
}

function reducer(state = initialState, action) {
    if (action.type === ADD_TODO) {
        return {
            ...state,
            todoList: [...state.todoList, action.payload]
        }
    }

    if (action.type === IS_TODO_COMPLETED) {
        return {
            ...state,
            isCompleted: state.isCompleted = !state.isCompleted

        }
    }
}

export default reducer;