import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';
import PostsPage from './pages/PostsPage';

function App () {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/contacts'>
          <ContactsPage />
        </Route>
        <Route path='/posts'>
          <PostsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
