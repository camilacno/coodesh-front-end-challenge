import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home/Home';
import { globalStyles } from './assets/styles/global.style.js';
import Header from './components/topbar/Topbar';

function App() {
  const classes = globalStyles();

  return (
    <>
      <Header />
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
