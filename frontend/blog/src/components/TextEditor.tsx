import React, { FC, useState, useContext } from "react";
import { Editor, OriginalTools } from "react-bootstrap-editor";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style.css";

const PostEdit: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const { store } = useContext(Context);
  const articleID = store.articleID;
  let English = true;
  let German = false;
  let Bulgarian = false;

  function setLang(str: string) {
    switch (str) {
      case "english":
        English = true;
        German = false;
        Bulgarian = false;
        break;
      case "german":
        English = false;
        German = true;
        Bulgarian = false;
        break;
      case "bulgarian":
        English = false;
        German = false;
        Bulgarian = true;
        break;
    }
  }

  function submitArticle(
    articleID: number,
    title: string,
    content: string,
    isActive: boolean
  ) {
    if (articleID !== 0) {
      store.editArticle(articleID, title, content, isActive);
    } else {
      store.addArticle(title, content, isActive);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-6">
          <h1 className="center">Add Article</h1>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                onClick={() => setLang("german")}
                className={English ? "nav-link active" : "nav-link"}
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected={English ? "true" : "false"}
              >
                English
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                onClick={() => setLang("german")}
                className={German ? "nav-link active" : "nav-link"}
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected={German ? "true" : "false"}
              >
                German
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                onClick={() => setLang("german")}
                className={Bulgarian ? "nav-link active" : "nav-link"}
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected={Bulgarian ? "true" : "false"}
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
              Title
            </span>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              className="form-control"
              placeholder="Title"
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
            <label className="form-check-label">is Active</label>
          </div>
          <button
            onClick={() => submitArticle(articleID, title, content, isActive)}
            type="button"
            className="btn btn-outline-dark"
          >
            Submit
          </button>
          <button
            onClick={() => {
              store.setWrite(false);
            }}
            type="button"
            className="btn btn-outline-dark"
          >
            Back
          </button>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default observer(PostEdit);
