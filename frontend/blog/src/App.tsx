import React, { FC, useContext, useState, Component } from "react";

import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";

import { Nav, Container, Row, Col, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import Articles from "./pages/articles";
import Article from "./pages/article";
import formAddEdit from "./pages/formAddEdit";
import ArticlesService from "./services/article-services";
import { ArticleResponse, IArticle } from "./types/index";
import PostEdit from "./components/TextEditor";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

class App extends Component {
  render(){
  /*const { store } = useContext(Context);
  const [articles, setArticles] = useState<ArticleResponse[]>([]);
  const [oneArticle, setOneArticle] = useState<IArticle>();*/
  //const { history  } = this.props;

 /* async function getArticles() {
    const response = await ArticlesService.getArticles();
    setArticles(response.data);
  }

  async function getArchive() {
    const response = await ArticlesService.getArchive();
    setArticles(response.data);
  }

  async function getArticleOnId(id: number) {
    const response = await ArticlesService.getArticleOnID(id);
    setOneArticle(response.data);
  }

  async function deleteArtcleOnId(id: number) {
    await ArticlesService.deleteArticle(id);
  }*/

  /*if (store.seeArticle) {
    const id = oneArticle?.id || 0;
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <h1 className="center">Articles listing</h1>
            <h5 className="center">Article Detalis</h5>
          </Col>
          <Col></Col>
        </Row>
        <Row key={id}>
          <Col></Col>
          <Col xs={8}>
            <div className="border-bottom">
              <h5 className="text-info center">{oneArticle?.title}</h5>
              <p>{oneArticle?.content}</p>
              <p>{oneArticle?.createdAt}</p>
            </div>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={8}>
            <p />
            <Button
              variant="outline-info"
              size="sm"
              onClick={() => {
                let id = oneArticle ? oneArticle.id - 1 : NaN;
                getArticleOnId(id);
              }}
            >
              PREV
            </Button>
            <Button
              variant="outline-info"
              size="sm"
              onClick={() => store.seeOneArticle(false)}
            >
              EXIT
            </Button>
            <Button
              variant="outline-info"
              size="sm"
              onClick={() => {
                let id = oneArticle ? oneArticle.id + 1 : NaN;
                getArticleOnId(id);
              }}
            >
              NEXT
            </Button>
          </Col>
          <Col>
            <p />
            <Button
              variant="outline-info"
              size="sm"
              onClick={() => {
                store.setID(oneArticle?.id || NaN);
                store.setWrite(true);
                store.seeOneArticle(false);
              }}
            >
              Edit
            </Button>
            <Button
              variant="outline-info"
              size="sm"
              onClick={() => {
                deleteArtcleOnId(oneArticle?.id || NaN);
                getArticles();
                store.seeOneArticle(false);
              }}
            >
              Delete
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  if (store.isWrite) {
    return (
      <div>
        <PostEdit />
      </div>
    );
  }*/

  return (
    <div className = "App">
      <Switch>
        <Route /*history = {history}*/ path = "/articles" component = {Articles} />
        <Route /*history = {history}*/ path = "/articles/archive" component = {Articles} />
        <Route /*history = {history}*/ path = "/articles/:id" component = {Article} />
      </Switch>
    </div>

    /*<div>
      <Container>
        <Row>
          <Col>
            <Nav defaultActiveKey="/home" as="ul">
              <Nav.Item as="li">
                <Nav.Link onClick={getArticles}>Articles</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link onClick={getArchive}>Archive</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link onClick={() => store.setWrite(true)}>Add</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col></Col>
          <Col>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <h1>Articles listing</h1>
          </Col>
          <Col></Col>
        </Row>
        {articles.map((article) => (
          <Row className="border-bottom" key={article.id} xs={8} md={1} lg={1}>
            <Col>
              <Col
                onClick={() => {
                  getArticleOnId(article.id);
                  store.seeOneArticle(true);
                }}
              >
                <p />
                <h5 className="text-info">{article.title}</h5>
              </Col>
            </Col>
            <Col>
              <p>{article.content}</p>
              <p className="text-muted">{article.createdAt}</p>
            </Col>
          </Row>
        ))}
      </Container>
    </div>*/
  );
};
}
export default withRouter(App);
