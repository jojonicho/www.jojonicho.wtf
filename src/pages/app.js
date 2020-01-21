import React from "react";
import { Router as MyRouter } from "@reach/router"
import IndexPage from "./index.js";

const Router = () => {
    return (
        <MyRouter>
            <IndexPage path="/" />
        </MyRouter>
    )
}

export default Router;