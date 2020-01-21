import React from "react";
import { Router as MyRouter } from "@reach/router"
import MangaRank from "./mangarank";
import IndexPage from "./index.js";

const Router = () => {
    return (
        <MyRouter>
            <IndexPage path="/" />
            <MangaRank path="/mangarank" />
        </MyRouter>
    )
}

export default Router;