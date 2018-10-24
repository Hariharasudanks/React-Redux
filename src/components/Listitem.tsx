import * as React from 'react';

import IListAttributes from './ListAttribute';

export default function ListItem(attributes: IListAttributes) {
    return (

        <li className={attributes.className} id={attributes.listId} onClick={attributes.onClickEventFunction}>
            <button className={attributes.buttonClassName} />
            <span className="innerspan mylist-innerspan" id={attributes.spanId}  >
                {attributes.listName} </span>
        </li>
    );

}

