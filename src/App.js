// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import AddContact from './Components/AddContact';
// import EditContact from './Components/EditContact';
// import ListCandidates from './Components/ListCandidates';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Suspense } from 'react';
const ListCandidates = React.lazy(() => import('./Components/ListCandidates'));
const AddContact = React.lazy(() => import('./Components/AddContact'));
const EditContact = React.lazy(() => import('./Components/EditContact'));
function App() {
  return (
    <>
      <Router>
      {/* Router based Code Splitting */}
        <Suspense fallback={<div>Loding...</div>}> 
          <Switch>
            <Route path="/" exact component={ListCandidates} />
            <Route path="/add" component={AddContact} />
            <Route path="/edit" component={EditContact} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
