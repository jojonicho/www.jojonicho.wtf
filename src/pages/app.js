import React from "react";
import { Router as MyRouter } from "@reach/router"
import IndexPage from "./index";
import Bloglist from "./blog"

const Router = () => {
    return (
        <MyRouter>
            <IndexPage path="/" />
            <Bloglist path="/blog" />
        </MyRouter>
    )
}

export default Router;