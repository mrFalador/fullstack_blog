import React, {useContext} from "react";
import { Nav, Container, Col, Row } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Context } from "./index";
import  i18next  from "i18next";
import { useTranslation, initReactI18next } from "react-i18next"
import Articles from "./pages/articles";
import Archive from "./pages/archive";
import Article from "./pages/article";
import PostEdit from "./components/TextEditor";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";


i18next
.use(initReactI18next)
.init({
  resources: require(`./languadges/languadge.json`),
  lng: "english", // if you're using a language detector, do not define the lng option
  fallbackLng: "english",
  interpolation: {
    escapeValue: false
  }
});

export default function App() {
  const { store } = useContext(Context);

function setLanguadge(str: string){
  i18n.changeLanguage(str)
  store.setLang(str)
}


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
              <Link to="/archive">{t('archive')}</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link>
              <Link to="/add">{t('add')}</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        </Col>
        <Col></Col>
        <Col>
          <select onChange = {(event) => setLanguadge(event.target.value)}>
            <option disabled>Change language</option>
            <option value = "english">English</option>
            <option value = "germany">Germany</option>
            <option value = "bolgarian">Bolgarian</option>
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
