import React, { FC, useState, useContext } from "react";
import { Nav, Container, Row, Col, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import ArticlesService from "../services/article-services";
import { ArticleResponse, IArticle } from "../types/index";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style.css";

const Articles : FC  = () => {
    const { store } = useContext(Context);
    const [articles, setArticles] = useState<ArticleResponse[]>([]);
    const [oneArticle, setOneArticle] = useState<IArticle>();
  
    async function getArticles() {
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


    return(
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
    );
}

export default observer(Articles);