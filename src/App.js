import {Route, withRouter} from 'react-router-dom';
import AllListToDo from './components/allListToDo';
import ListToDo from './components/listToDo';
import CreateToDo from './components/createToDo';
import DeleteToDo from './components/createToDo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path='/' component={AllListToDo} />
        <Route exact path='/find_create' component={ListToDo} />
        <Route exact path='/todo/create' component={CreateToDo} />
        <Route exact path='/todo/delete' component={DeleteToDo} />
      </header>
    </div>
  );
}

export default withRouter(App);
