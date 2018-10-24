import * as React from 'react';


class Topnav extends React.Component {
  public render() {
    return (
      <nav className = "top-nav">
<div className ="top-text">
  To-Do
</div>
<div className ="search">
<i className ="search-icon fa fa-search"/>
  <input className = "search-text" placeholder="Search "/>
</div>
</nav>
    );
  }
}

export default Topnav;
