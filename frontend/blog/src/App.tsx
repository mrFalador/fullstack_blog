import React, {FC, useContext, useState} from 'react';
import ArticlesService from './services/article-services';
import { ArticleResponse } from './models/response/ArticleResponse';
import { Context } from './index';
import { Nav, Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'

const App: FC = () =>{
  const {store} = useContext(Context);
  const [articles, setArticles] = useState<ArticleResponse[]>([])

  async function getArticles() {
    const response = await ArticlesService.getArticles();   
    setArticles(response.data)
  }

  async function addArticle(){

    return(
      <div>
      </div>
    )

  }

  return(
    <div>
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link onClick = {getArticles}>Articles</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link onClick = {addArticle}>Add</Nav.Link>
        </Nav.Item>
      </Nav>
      <Container>
      <Row>
        <Col></Col>
        <Col><h1>Articles listing</h1></Col>
        <Col></Col>
      </Row>
      { articles.map(article =>
      <Row key = {article.id} xs={1} md={1} lg={1}>
        <Col><h5 className = "text-info">{article.title}</h5></Col>
        <Col><p>{article.content}</p></Col>
      </Row>
      )}
      </Container>
    </div>

  )
}
export default App;
