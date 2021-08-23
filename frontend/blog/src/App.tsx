import React from "react";
import { Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Articles from "./pages/articles";
import Archive from "./pages/archive";
import Article from "./pages/article";
import PostEdit from "./components/TextEditor";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export default function App() {
  return (
    <Router>
      <div>
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link>
              <Link to="/articles">Articles</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link>
              <Link to="/archive">Archive</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link>
              <Link to="/add">Add</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Switch>
          <Route path="/articles">
            <Articles />
          </Route>
          <Route path="/archive">
            <Archive />
          </Route>
          <Route path="/article/:id">
            <Article />
          </Route>
          <Route path="/add">
            <PostEdit />
          </Route>
          <Route path="/edit/:id">
            <PostEdit />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
