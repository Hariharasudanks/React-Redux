import * as React from 'react';
import './style.css';

import {Provider} from "react-redux";
import { createStore  } from 'redux';
import Content from './components/Content';
import Topnav from './components/Topnav';
import reducer from './reducers/reducers';

// declare global {
//   // tslint:disable-next-line:interface-name
//   interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
// }

// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || null;

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: true }) || compose;
const store = createStore(reducer);


class App extends React.Component {
  public render() {
    return (
      <Provider store= {store}>
      <div className="App">
         <Topnav/>
	<Content/>
    </div>
    </Provider>
    );
  }
}

export default App;
