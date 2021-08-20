import React, { FC, useState, useContext } from "react";
import { Nav, Container, Row, Col, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import ArticlesService from "../services/article-services";
import { ArticleResponse, IArticle } from "../types/index";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style.css";

const Article: FC = () => {
    const { store } = useContext(Context);
    const [oneArticle, setOneArticle] = useState<IArticle>();
    const [articles, setArticles] = useState<ArticleResponse[]>([]);
    const id = oneArticle?.id || 0;

    async function getArticleOnId(id: number) {
        const response = await ArticlesService.getArticleOnID(id);
        setOneArticle(response.data);
      }

    async function deleteArtcleOnId(id: number) {
        await ArticlesService.deleteArticle(id);
      }

    async function getArticles() {
        const response = await ArticlesService.getArticles();
        setArticles(response.data);
      }


    return(
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
    )
}

export default Article;