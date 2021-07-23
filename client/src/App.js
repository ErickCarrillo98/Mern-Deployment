import {Router} from "@reach/router";
import CreateForm from "./components/CreateForm"
import ListComponent from "./components/ListComponent"
import Detail from "./components/Detail"
import Edit from "./components/Edit"

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Router>
        <ListComponent path="/" />
        <CreateForm path="/pets/new" />
        <Detail path="/pets/:pet_id" />
        <Edit path="/pets/:pet_id/edit" />
      </Router>
    </div>
  );
}

export default App;
