import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Posts from "./pages/Posts";
import PostDetail from "./components/Posts/PostDetail";
import Navbar from "./pages/Navbar";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/:id" component={PostDetail} />
        <Route exact path="/about" component={About} />
        <Route exact path="/">
          <Redirect to="/posts" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
