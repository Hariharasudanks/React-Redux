import * as React from 'react';


import Listcontent from './Listcontent';
import Sidenav from './Sidenav';
import Store from './Store';


class Content extends React.Component<{}, { isCheckedClick: number, currentList: number, currentTask: number, list: any, task: any, isChecked: boolean, isImportant: boolean, deleted: any}>{
  constructor(props: any) {
    super(props);
    this.state = {
      currentList: -1,
      currentTask: -1,
      deleted: false,
      isChecked: false,
      isCheckedClick: 0,
      isImportant: false,
      list: null,
      task: null,

    };
  }

  public findListById(listId: number) {
    let list;
    for (const listItem of Store.StoreLists) {

      if (listItem.getId() === listId) {
        list = listItem;
      }

    }
    return list;
  }

  public findTaksById(index: number) {
    const list = this.state.list;
    let taskItem;
    if (list != null) {
      for (const task of list.getListOfTodo()) {
        if (index === task.getId()) {
          taskItem = task
          //   alert("Content inside...Task: "+task.getId() +"found");
        }

      }

    }
    return taskItem;
  }


  public setCurrentList = (index: number) => {
    const currentSelectedList = this.findListById(index);
    this.setState({
      currentList: index,
      currentTask: -1,
      list: currentSelectedList
    });

  }

  public changeNote = (note: any) => {
    const newTask = this.state.task
    newTask.setNote(note)
    this.setState({
      task: newTask
    });
    // this.state.task.setNote(note);

  //  console.log("Inside parent....Note is.." + this.state.task.getNote());
  }

  public deleteTask = (e: any) => {
    //  alert("TASK ID: "+this.state.task.getId());
    this.setState({
      currentTask: -1,
      deleted: true,

    });
    this.state.list.getListOfTodo().splice(this.state.list.getListOfTodo().indexOf(this.state.task), 1)
  }
  public checkIsChecked = (index: any) => {
    // alert("Inside Check click fn")
    const taskItem = this.findTaksById(index);
    // alert("task is : "+taskItem)
    // taskItem.setisChecked(!(taskItem.getisChecked()))
    this.setState({
      //  isChecked: !this.state.isChecked,
      isCheckedClick: 1,
      task: taskItem

    }, () => {

      if (this.state.isCheckedClick === 1) {
        this.state.task.setisChecked(!(this.state.task.getisChecked()))
        //    alert("Task Set, Is checked is: "+this.state.task.getisChecked()) ;
        this.setState({
          isCheckedClick: 0
        })
      }
    });
  }

  public setCurrentTask = (index: number) => {
    //  alert("////Inside Content SetCurrentTask.... index is: " + index);

    const taskItem = this.findTaksById(index);

    // if(taskItem!== null){
    //   alert("b4 change: "+taskItem.getisChecked());
    // if(this.state.isCheckedClick === 1){
    // taskItem.setisChecked(!(taskItem.getisChecked()))
    // }
    //  alert("after change: "+taskItem.getisChecked());
    // taskItem.setisChecked(this.state.isChecked)
    this.setState({
      currentTask: index,
      list: this.state.list,
      task: taskItem,
    });
    // alert("Task Searched, Is checked is: "+this.state.task.getisChecked())

    // if (this.state.isCheckedClick) {
    //  alert("1===1");



    //  alert("Task Set, Is checked is: "+this.state.task.getisChecked()) ;

    // }

    //  this.state.isCheckedClick = 0;
    // alert("////Inside Content index is: "+index);
  }



  public render() {
    return (
      <div className="contents">
        <Sidenav setCurrentList={this.setCurrentList}/>
        <Listcontent activeList={this.state.currentList} setCurrentList={this.setCurrentList} setCurrentTask={this.setCurrentTask} checkIsChecked={this.checkIsChecked} />
      </div>
    );
  }
}

export default Content;
