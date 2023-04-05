// import logo from './logo.svg';
import './App.css';
import AddContact from './Components/AddContact';
import ListCandidates from './Components/ListCandidates';
import EditContact from './Components/EditContact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={ListCandidates}/>
          <Route path="/add" component={AddContact}/>
          <Route path="/edit" component={EditContact}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
