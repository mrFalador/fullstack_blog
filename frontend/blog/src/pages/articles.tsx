import React, { FC, useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import ArticlesService from "../services/article-services";
import { ArticleResponse } from "../types/index";
import { useTranslation } from "react-i18next";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style.css";

const Articles: FC = () => {
  const { store } = useContext(Context);
  const [articles, setArticles] = useState<ArticleResponse[]>([]);
  const { t } = useTranslation();

  async function getArticles() {
    const response = await ArticlesService.getArticles();
    setArticles(response.data);
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <h1>{t('header_article')}</h1>
        </Col>
        <Col></Col>
      </Row>
      {articles.map((article) => (
        <Row className="border-bottom" key={article.id} xs={8} md={1} lg={1}>
          <Col>
            <Col
              onClick={() => {
                store.setOneArticle(article.id);
              }}
            >
              <p />
              <Link to={`/article/${article.id}`}>
                <h5 className="text-info">{article.title}</h5>
              </Link>
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
};

export default observer(Articles);
