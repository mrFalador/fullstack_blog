import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import PostEdit from "../components/TextEditor";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style.css";

const formEditAdd : FC = () => {

    return (
        <div>
          <PostEdit />
        </div>
      );
}

export default observer(formEditAdd);