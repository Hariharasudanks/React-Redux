import * as React from 'react';

import Todo from './Todo'

class Tasks extends React.Component<{ tasks: Todo[], handleOnClickTask: (event : any) => void, toggleStatus : (event : any) => void
     , toggleImportant : (event : any) => void }, {}> {

    public render() {
        return this.props.tasks.map((task: Todo) => (
            <li key={task.getId()} className={"task " + (task.getIsActive() ? " active" : " ")}
                   id={"task" + task.getId()} onClick={this.props.handleOnClickTask}>
                <i className={"status " + task.getisImportant() ? "fa fa-circle-thin" : "fa fa-check-circle"} onClick = {this.props.toggleStatus}/>
                <div>{task.getName()}</div>
                <i className={"important " + task.getisChecked() ? "fa fa-star-o" : "fa fa-star"}  onClick = {this.props.toggleImportant}/>
            </li>
        )
        );
    }
}
export default Tasks;
