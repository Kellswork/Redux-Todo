import { ADD_TODO, IS_COMPLETED } from './action';

const initialState = {
    todos: []
}

function reducer(state = initialState, action) {

    switch (action.type) {
        case ADD_TODO:
            return {
                ...state, todos: state.todos.concat(action.payload)
            }
        case IS_COMPLETED:
            const todos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, isComplete: !todo.isComplete }
                } return todo
            })
            return {
                ...state, todos
            }
        default:
            return state;
    }

}

export default reducer;