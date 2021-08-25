import React, { FC, useState, useContext } from "react";
import { Editor, OriginalTools } from "react-bootstrap-editor";
import { Link, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next"
import { Context } from "../index";
import { Iid } from "../types/index"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style.css";

const PostEdit: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const { store } = useContext(Context);
  const { id }  = useParams<Iid>();
  const { t, i18n } = useTranslation();

  function setLanguadge(str: string){
    i18n.changeLanguage(str)
    store.setLang(str)
  }

  function submitArticle(
    id : string,
    title: string,
    content: string,
    isActive: boolean
  ) {
    if (id) {
      store.editArticle(Number(id), title, content, isActive);
    } else {
      store.addArticle(title, content, isActive);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-6">
          <h1 className="center">{t('add_article')}</h1>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                onClick={() => {setLanguadge("english")}}
                className={store.language === "english" ? "nav-link active" : "nav-link"}
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected={store.language === "english" ? "true" : "false"}
              >
                English
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                onClick={() => {setLanguadge("germany")}}
                className={store.language === "germany" ? "nav-link active" : "nav-link"}
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected={store.language === "germany" ? "true" : "false"}
              >
                German
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                onClick={() => {setLanguadge("bolgarian")}}
                className={store.language === "bolgarian" ? "nav-link active" : "nav-link"}
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected={store.language === "bolgarian" ? "true" : "false"}
              >
                Bulgarian
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            ></div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            ></div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            ></div>
          </div>
        </div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col-6">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              {t('title')}
            </span>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              className="form-control"
              placeholder={t("title")}
              aria-label=""
              aria-describedby="basic-addon1"
            />
          </div>
          <p />
          <Editor
            tools={OriginalTools}
            onChange={(e) => setContent(e)}
            value={content}
          />
          <div className="form-check">
            <input
              onChange={(e) => setIsActive(e.target.checked)}
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label">{t('active')}</label>
          </div>
          <Link to = {`/article/${Number(id)}`}>
          <button
            onClick={() => submitArticle(id, title, content, isActive)}
            type="button"
            className="btn btn-outline-dark"
          >
            {t('submit')}
          </button>
          </Link>
          <Link to = "/articles">
          <button
            onClick={() => {
              store.setWrite(false);
            }}
            type="button"
            className="btn btn-outline-dark"
          >
            {t('back')}
          </button>
          </Link>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default observer(PostEdit);
