import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Blog from "./Pages/Blog";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Blog} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
