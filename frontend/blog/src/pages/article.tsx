import React, { FC, useState, useContext, useEffect } from "react";
import {
  Link,
  useParams,
} from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next"
import { Context } from "../index";
import ArticlesService from "../services/article-services";
import { IArticle, Iid } from "../types/index";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style.css";

const Article: FC = () => {
  const { store } = useContext(Context);
  const [oneArticle, setOneArticle] = useState<IArticle>();
  const { id } = useParams<Iid>(); 
  const { t } = useTranslation();

  async function getArticleOnId(id: number) {
    const response = await ArticlesService.getArticleOnID(id);
    setOneArticle(response.data);
  }

  async function deleteArtcleOnId(id: number) {
    await ArticlesService.deleteArticle(id);
  }

  async function getArticles() {
    await ArticlesService.getArticles();
  }

  useEffect(() => {
    getArticleOnId(Number(id));
  }, [id]);

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col>
          <h1 className="center">{t('header_article')}</h1>
          <h5 className="center">{t('article_details')}</h5>
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
          <Link to={`./${Number(id) - 1}`}>
            <Button variant="outline-info" size="sm">
              {t('prev')}
            </Button>
          </Link>
          <Link to="/articles">
            <Button variant="outline-info" size="sm">
            {t('exit')}
            </Button>
          </Link>
          <Link to={`./${Number(id) + 1}`}>
            <Button variant="outline-info" size="sm">
            {t('next')}
            </Button>
          </Link>
        </Col>
        <Col>
          <p />
          <Link to={`/edit/${Number(id)}`}>
            <Button variant="outline-info" size="sm">
            {t('edit')}
            </Button>
          </Link>
          <Link to="/articles">
            <Button
              variant="outline-info"
              size="sm"
              onClick={() => {
                deleteArtcleOnId(oneArticle?.id || NaN);
                getArticles();
                store.seeOneArticle(false);
              }}
            >
              {t('delete')}
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default observer(Article);
