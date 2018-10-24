import * as React from 'react';

import Store from './Store';
import Todo from './Todo';

export default class RightSideToggle extends React.Component<{ activeTask: number, activeList: number, currentSelectedTask: Todo, changeNote: (index: any) => void, deleteTask: (e: any) => void }, { reminderFlag: boolean, dueDateFlag: boolean, noteFlag: boolean, note: string }>{

  constructor(props: any) {
    super(props);
    this.state = {
      dueDateFlag: false,
      note: "",
      noteFlag: false,
      reminderFlag: false,
    };

    // Initial state
  }

  public changeReminderState = () => {
    this.setState({
      reminderFlag: true

    })

  }
  public deleteTask = (e: any) => {
    this.props.deleteTask(e);
  }
  public setChangedNote = (e: any) => {
    //  const note = e.target.value;
    console.log("note is: " + this.state.note);
    //  this.props.changeNote(this.state.note);
    this.setState({
      noteFlag: true
    })
  }
  public onChangeNote = (e: any) => {
    const note = e.target.value;
    this.props.changeNote(note);

    //   this.setState({
    //     note: note1,
    //     // noteFlag: false
    //  })
    //   // console.log("note is: " +note);
    // this.props.changeNote(note);
    // this.props.onChangeNote()
  }
  public changeNoteState = () => {
    this.setState({
      noteFlag: true
    })
  }
  public changeDueDateState = () => {
    this.setState({
      dueDateFlag: true

    })

  }

  public setDueDateState = (e: any) => {
    this.props.currentSelectedTask.setdueDate(e.target.value);
    this.setState({
      dueDateFlag: false

    })

  }
  public setAddToDay = (e: any) => {
    this.props.currentSelectedTask.setaddtoDay(!this.props.currentSelectedTask.getaddtoDay());
  }
  public setReminder = (e: any) => {
    this.props.currentSelectedTask.setreminder(e.target.value);
    this.setState({
      reminderFlag: false

    })
    // console.log("")
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
    const list = this.findListById(this.props.activeList)
    let taskItem;
    if (list != null) {
      for (const task of list.getListOfTodo()) {
        if (index === task.getId()) {
          taskItem = task
          // alert("Task: "+task.getId() +"found");
        }

      }

    }
    return taskItem;
  }
  public render() {
    /* const task = this.findTaksById(this.props.activeTask) === undefined? new Todo(0,"",false,false,"","",false,"")
    :this.findTaksById(this.props.activeTask);
    */
    const task = (this.props.currentSelectedTask === null ? new Todo(0, "", false, false, "", "", false, "")
      : this.props.currentSelectedTask);
    return (
      <div className={"side-content" + (this.props.activeTask !== -1 ? " side-content-open" : "")}>
        <div className="content">
          <div className="right-top-content-one">

            <button className={task.getisChecked() ? "fa fa-check-circle button class" : "fa fa-circle-thin button class"} />
            <span className={task.getisChecked() === true ? "span-strike" : ""}>{task!.getName()}</span>
            <button className="fa fa-star-o right-float" aria-hidden="true" />
          </div>
        </div>
        <br />
        <div className="right-top-content-two">
          <div className="content-2">
            <button className={task.getaddtoDay() === true ? "fa fa-sun-o blue-button-class " : "fa fa-sun-o button-class "} onClick={this.setAddToDay} />
            <span className={task.getaddtoDay() === true ? "added" : ""} onClick={this.setAddToDay}>Add to my day</span>
          </div>
        </div>
        <br />
        <div className="right-top-content-three">
          <div className="content-3">
            <div className="inner-div-1">
              <button className="fa fa-clock-o button-class " />
              <div className="inner-div-2">
                <span className="dateTwo" onClick={this.changeReminderState}>{task.getreminder() === "" ? "Reminfd Me" : task.getreminder()}</span>
                <input className={"datetwoTwo" + (this.state.reminderFlag === true ? " datetwoTwo-toggle" : "")} type="date" onBlur={this.setReminder} />
              </div>
              <br />
              <div className="inner-div-1">
                <button className="fa fa-calendar button-class " />
              </div>
              <div className="inner-div-2">
                <span className="dateOne" onClick={this.changeDueDateState}>{task.getdueDate() === "" ? "Add Due Date" : task.getdueDate()}</span>
                <input className={"dateoneOne" + (this.state.dueDateFlag === true ? " dateoneOne-toggle" : "")} type="date" onBlur={this.setDueDateState} />
              </div>
              <br />
              <div className="inner-div-1">
                <button className="fa fa-repeat button-class " />
              </div>
              <div className="inner-div-2">
                <span>Repeat</span>
              </div>

            </div>
          </div>
          <br />
          <div className="right-top-content-four">
            <div className="content-4">
              <textarea className="note" rows={4} cols={50} onChange={this.onChangeNote} value={task.getNote()} placeholder="Add a note..." />
            </div>
          </div>
          <div className="bottom-right">
            <div className="left-bottom-content-one">
              <div className="content">
                <button className="fa fa-chevron-right button class" />
                <span>Completed Today</span>
                <button className="fa fa-trash-o right-float delete" onClick={this.deleteTask} aria-hidden="true" />

              </div>
            </div>
          </div>


        </div>

      </div>
    );

  }


}
