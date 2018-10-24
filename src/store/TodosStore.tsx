import { EventEmitter } from "events";
import * as Actions from "../actions/AddButtonAction";
import Lists from '../components/list'

class Store extends EventEmitter {

    public StoreLists: Lists[] = [];

    constructor() {
        super();
    }

    public handleActions(action: any) {
        switch (action.type) {
            case Actions.TO_DO_LIST_ACTIONS.ADD_LIST: {
                alert("inside case 1");
                this.StoreLists.push(action.value)
                // this.activeColor = action.value;

                this.emit("storeUpdated");
                break;
            }
            // default: {
            // }
        }
    }
    public getLists(): Lists[] {
        return this.StoreLists;
    }
}
const store = new Store();
export default store;
