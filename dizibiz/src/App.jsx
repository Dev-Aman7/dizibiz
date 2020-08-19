import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store";

import Blog from "./Pages/Blog";
import Post from "./Pages/Post";

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/post" component={Post} />
                        <Route path="/" component={Blog} />
                    </Switch>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
