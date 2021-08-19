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

  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <h1 className="center">Add Article</h1>
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
            onClick={() => {
              if (articleID !== 0) {
                store.editArticle(articleID, title, content, isActive);
              } else {
                store.addArticle(title, content, isActive);
              }
            }}
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
