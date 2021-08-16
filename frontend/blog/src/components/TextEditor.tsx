import React, {FC, PureComponent, useContext, useState } from 'react';
import { Editor, OriginalTools } from 'react-bootstrap-editor';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import 'bootstrap/dist/css/bootstrap.min.css'
import { ArticleResponse } from '../models/response/ArticleResponse';

const TextEditor: FC = () => {
    const {store} = useContext(Context);
    const {article, setArticle} = useState<ArticleResponse>('')

    return (
            <Editor
                tools={OriginalTools}
                value="<p>test</p>"
                onChange={console.log}
            />
        );
    }
}
export default observer(TextEditor);