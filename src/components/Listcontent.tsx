import * as React from 'react';


import Store from './Store';
import TaskMap from './TaskMap';
import Todo from './Todo';


class Listcontent extends React.Component<{ activeList: number, setCurrentList: (index: number) => void, setCurrentTask: (index: number) => void, checkIsChecked: (index: number) => void }, { inputValue: string }> {

  constructor(props: any) {
    super(props);
    this.state = {
      inputValue: "",

    };

    // Initial state
  }

  public setCurrentTask = (index: any) => {
    // this.props.setCurrentTask(index)
    this.props.setCurrentTask(parseInt(index, 10));
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
  public setTaskName = (e: any) => {
    this.setState({
      inputValue: e.target.value,

    })

  }

  public clickTask = () => {
    this.setState({

    })
  }
  public addTask = () => {
    const list = this.findListById(this.props.activeList);

    if (list != null) {
      console.log("Active List is: " + list.getName());
      let taskLength = list.getListOfTodo().length;
      console.log("B4 Push length is: " + taskLength);
      list.getListOfTodo().push(new Todo(++taskLength, this.state.inputValue, false, false, "", "", false, ""));
      console.log("list Size is: " + list.getListOfTodo().length);
    }
    // this.showInputFormToAddTask();
    this.setState({
      inputValue: "",

    })

  }
  public CheckEnter = (e: any): void => {
    if (e.key === 'Enter') {
      this.addTask();
    }
  }

  public render() {
    const list = this.findListById(this.props.activeList)
    return (

      <div className="list-content">
        <div className="heading" contentEditable={true}>
          {(list == null ? "MyList" : list.getName())}
        </div>

        <div className="sort">
          <button className="fa fa-exchange fa-rotate-90 button-class" />
        </div>
        <div className="list-inner-content">

          <ul className="ul">
            <TaskMap activeList={this.props.activeList} setCurrentTask={this.setCurrentTask} checkIsChecked={this.props.checkIsChecked} />
          </ul>
          <div className="add-task">
            <button className="fa fa-plus click-plus button-class" onClick={this.addTask} />
            <input className="input-text" placeholder="Add a task" value={this.state.inputValue} onChange={this.setTaskName} onKeyPress={this.CheckEnter} />
            <button className="add-class">ADD</button>
          </div>
        </div>
      </div>

    );
  }
}

export default Listcontent;



