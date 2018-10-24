import * as React from 'react';

import Lists from './list';
import ListItem from './Listitem';

class ListMap extends React.Component<{ lists: Lists[], active: number, handleOnclick: (e: any) => void }, {}> {
    public create = (lists: Lists[]) => {
        console.log(lists);
        return lists.map((list: Lists) => ListItem(
            {
            active: (this.props.active === list.getId() ? true : false),
            // activeList:this.props.active, 
            buttonClassName: "fa fa-list-ul button-class",
            className: "list-item" + (this.props.active === list.getId() ? " active" : ""),
            listId: "list" + list.getId(),
            listName: list.getName(),
            onClickEventFunction: this.props.handleOnclick,
            spanId: "span" + list.getId()
        }))
    }

    public render() {
        return (
            <div>
                {this.create(this.props.lists)}
            </div>
        );
    }
}
export default ListMap;