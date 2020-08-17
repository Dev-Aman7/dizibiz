import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Blog from "./Pages/Blog";
import Post from "./Pages/Post";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/post" component={Post} exact />
                <Route path="/" component={Blog} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
