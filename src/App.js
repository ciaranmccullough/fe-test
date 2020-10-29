import './App.css';
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
} from 'react-router-dom';

import Lander from '../src/pages/lander/lander';
import Open from '../src/pages/open/open';
import NotFound from '../src/pages/not-found/not-found';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Lander} />
        <Route exact path='/open' component={Open} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
