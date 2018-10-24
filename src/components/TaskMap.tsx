import * as React from 'react';

import Store from "./Store"

// import operations from './Opertions';


class TaskMap extends React.Component<{ activeList: number, setCurrentTask: (index: any) => void , checkIsChecked:(index:number)=>void}, { parentId: number, isChecked: boolean }> {

  constructor(props: any) {
    super(props);
    this.state = {
      isChecked: false,
      parentId: -1
    };

  }

  public stopPropagation= (e:any)=>{
    alert("Stop Propogation");
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
}
  public getParentId = (event: any) => {
    // alert("event is: "+event)
    const id = event.target.id === "" ? (event.target.parentNode.id).split("task")[1] : (event.target.id).split("task")[1]
    // alert("ID is:"+id);
    this.props.setCurrentTask(id);
    //  // const id = (event.target.parentNode.id).split("task")[1]
    //   this.setState({
    //    parentId:id
    //   });
    //   console.log("Parentttttttttt ID is: "+id)
    //   this.props.setCurrentTask(id);
  }

  public changeIsChecked = (event: any) => {
    // this.setState({
    //   isChecked: !this.state.isChecked
    // })
    if (this.state.parentId === -1) {
      // alert("inside IF con");
       const id = (event.target.parentNode.id).split("task")[1]
    this.props.checkIsChecked(id);
    }
  //  this.getParentId(event);
  //  this.stopPropagation(event);
    
  }

  public findTaksById(index: number) {
    const list = this.findListById(this.props.activeList);
    let taskItem;
    if (list != null) {
      for (const task of list.getListOfTodo()) {
        if (index === task.getId()) {
          taskItem = task
            alert("Content inside...Task: "+task.getId() +"found");
        }

      }

    }
    return taskItem;
  }
  public getTaskId = (event: any) => {
    if (this.state.parentId === -1) {
     // alert("inside IF con");
      const id = (event.target.id).split("task")[1]
     // alert("Task ID is: " + id);
      this.props.setCurrentTask(id);
    }
    else {
    //  alert("inside IF con");
      this.props.setCurrentTask(this.state.parentId);
    }
    this.setState({
      parentId: -1
    });
  }
  public findListById(listId: number) {
    let list;
    // let id = parseInt(listId,10);
    // console.log("inside TaskMap: ...Length"+Store.length);
    for (const listItem of Store.StoreLists) {

      if (listItem.getId() === listId) {
        list = listItem;
      }
    }
    return list;
  }


  public render() {
    const list = this.findListById(this.props.activeList);

    return (
      (list != null ?
        list.getListOfTodo().map((task) =>

          <li className="item" key={task.getId()} id={"task" + task.getId()} onClick={this.getParentId} >
            <button className={task.getisChecked() ? "fa fa-check-circle listButton1" : "fa fa-circle-thin listButton1"} key={"button1" + task.getId()} onClick={this.changeIsChecked} />
            <span className={task.getisChecked() ?"span-strike":"span"} key={"span" + task.getId()} onClick={this.getParentId}>{task.getName()}</span>
            <button className="fa fa-star-o listButton2 right-float" key={"button2" + task.getId()} onClick={this.getParentId} />
          </li>


        )
        : "")




    );






  }


}
export default TaskMap;



