import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <>
      <Topbar />

      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
