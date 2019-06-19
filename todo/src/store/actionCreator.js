import { ADD_TODO } from "./action";
import uuid from 'uuid';


export default function addTodo(item) {
    return {
        type: ADD_TODO,
       payload: {
        todo: item,
        id: uuid(),
        isComplete: false
       }
    }
}