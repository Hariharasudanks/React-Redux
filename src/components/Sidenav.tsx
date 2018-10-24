import * as React from 'react';

import { connect } from 'react-redux';
import * as Actions from '../actions/AddButtonAction';
import Lists from './list';
import ListMap from './Listmap';

class Sidenav extends React.Component<{ setCurrentList: (index: number) => void, storeProps: Lists[], addList: (inputValue: any) => void }, { inputValue: string, open: boolean, activeList: number, store: any }> {

  constructor(props: any) {
    super(props);
    this.state = {
      activeList: 0,
      inputValue: "",
      open: true,
      store: this.props.storeProps
    };

    // Initial state
  }
  

public setInput=(e:any)=>{
  this.setState({
    inputValue: e.currentTarget.value
});
}
  public setCurrentList(index: any) {
    this.props.setCurrentList(parseInt(index, 10));
  }


  public addNewList = (e: any) => {
    this.setState({
      activeList: (e.target.id).split("list")[1]
    }, () => {
      this.setCurrentList(this.state.activeList);
    });
  }


  public addList = (e: any) => {
    if (e.charCode === 13) {
      this.props.addList((new Lists(1, this.state.inputValue, 10, false, [])));
      this.setState({
        inputValue:""
      });
    }

  }


  public toggle = () => {
    this.setState({
      open: !this.state.open
    });
  }

  public render() {
    return (
      <div className={"side-nav " + (this.state.open ? "" : "sidenav-collapse")}  >
        <ul className="sideLinks">
          <li>
            <a href="#"><button className="fa fa-bars  button-class " onClick={this.toggle} /></a>
          </li>
          <li>
            <a href="#"><button className="fa fa-sun-o button-class " /></a>
            <span className={"innerspan " + (this.state.open ? "" : "innerspan-collapse")}>My day</span>
          </li>
          <li>
            <a href="#"><button id="star" className="fa fa-star-o button-class" aria-hidden="true" /></a>
            <span className={"innerspan " + (this.state.open ? "" : "innerspan-collapse")}>Important</span>
          </li>

          <li>
            <a href="#"><button className="fa fa-calendar  button-class" /></a>
            <span className={"innerspan " + (this.state.open ? "" : "innerspan-collapse")}>Planned</span>
          </li>
          <li><a href="#"><button className="fa fa-home button-class" /></a>
            <span className={"innerspan " + (this.state.open ? "" : "innerspan-collapse")}>Tasks</span>

          </li>
        </ul>
        <ul className="inner-ul">
          <ListMap lists={this.state.store} active={this.state.activeList} handleOnclick={this.addNewList} />

          <li className="list-item"><button className="fa fa-plus side-button button-class" />
            <input className="innerspan-input innerspan side-button" placeholder="New List" onChange={this.setInput} onKeyPress={this.addList} value ={this.state.inputValue}/>
          </li>

        </ul>
      </div>

    );
  }
}
const mapDispatchToProps = (dispatch: any) => ({
  addList: (value: any) => dispatch(Actions.addList(value))
})

const mapStateToProps = (state: any) => ({
  storeProps: state.todos
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidenav);
