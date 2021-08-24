import React, {useContext} from "react";
import { Nav, Container, Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Context } from "./index";
import Articles from "./pages/articles";
import Archive from "./pages/archive";
import Article from "./pages/article";
import PostEdit from "./components/TextEditor";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { store } from ".";
import  i18next  from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";


export default function App() {
  const { store } = useContext(Context);

  i18next
  .use(initReactI18next)
  .init({
    resources: require(`./languadges/languadge.json`),
    lng: store.language,
    fallbackLng: store.language,
    interpolation: {
      escapeValue: false
    }
  });

  const { t, i18n } = useTranslation();
  return (
    <Router>
      <div>
        <Container>
        <Row>
        <Col>
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link>
              <Link to="/articles">{t('article')}</Link>
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
        </Col>
        <Col></Col>
        <Col>
          <select>
            <option disabled>Change language</option>
            <option onClick = {() => {i18n.changeLanguage("english"); store.setLang("english")}}>English</option>
            <option onClick = {() => {i18n.changeLanguage("germany"); store.setLang("germany")}}>Germany</option>
            <option onClick = {() => {i18n.changeLanguage("bolgarian"); store.setLang("bolgarian")}}>Bolgarian</option>
          </select>
        </Col>
        </Row>
        </Container>
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
