import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Sidenav from "./components/Sidenav";
import AllContacts from "./components/AllContacts";
import AddContact from "./components/AddContact";
import ViewContact from "./components/ViewContact";
import UpdateContact from "./components/UpdateContact";
import { Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidenav />
        <Navbar />
        <Route exact path="/" component={AllContacts} />
        <Route path="/add" component={AddContact} />
        <Route path="/view/:id" component={ViewContact} />
        <Route path="/update/:id" component={UpdateContact} />
      </div>
    );
  }
}

export default App;
