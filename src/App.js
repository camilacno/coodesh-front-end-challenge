import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Topbar from './components/topbar/Topbar';
import { globalStyles } from './assets/styles/global.style.js';

function App() {
  const classes = globalStyles();

  return (
    <>
      <Topbar />
      <div className={classes.appContainer}>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
