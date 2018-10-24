import Lists from '../components/list';

export const TO_DO_LIST_ACTIONS = {
    ADD_LIST: 'toDoApp.addList'
};

export function addList(newList: Lists) {
    // alert("action")
    return ({
        type: TO_DO_LIST_ACTIONS.ADD_LIST,
        value: newList
    })
}
