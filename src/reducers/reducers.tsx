import { AnyAction } from 'redux';
import * as Actions from '../actions/AddButtonAction'
// import todoStore from '../store/Store';

const initialState: any = {
    todos: []
}

export default function reducer(state: any = initialState, action: AnyAction) {
    if (typeof state === undefined) {
        return initialState
    }

    switch (action.type) {
        case Actions.TO_DO_LIST_ACTIONS.ADD_LIST:
            return {
                ...state,

                todos: initialState.todos.push(action.value)
            }

        // return todoStore.StoreLists.push(action.value);
        default:
            return state
    }
}
