import * as React from 'react';


import RightSideToggle from './RightSideToggle';
import Todo from './Todo';

class Rightsidenav  extends React.Component<{ activeList:number, activeTask: number,currentSelectedTask:Todo,changeNote: (index: any) => void, deleteTask:(e:any)=>void }> {
  public render() {
    return (
      <RightSideToggle activeList={this.props.activeList} activeTask={this.props.activeTask} currentSelectedTask={this.props.currentSelectedTask} changeNote = {this.props.changeNote}  deleteTask={this.props.deleteTask}/>


    );
  }
}

export default Rightsidenav;

