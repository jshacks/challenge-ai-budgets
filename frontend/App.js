import React from 'react';
import {hashHistory, Router, IndexRoute, Route} from 'react-router';
import Welcome from './Welcome.js';
import Customize from './Customize.js';

const App = () => (
  <Router history={hashHistory} >
   <Route path="/" component={Main} >
    <IndexRoute component={Welcome} />
    <Route path="Customize" component={Customize} />
   </Route>
  </Router>
)

class Main extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default App;
