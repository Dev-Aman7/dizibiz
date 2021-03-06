import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";

// import logger from "redux-logger";
import thunk from "redux-thunk";

import { blogsReducer } from "./reducer/index";
// import blogsReducer from "./reducer/blogsReducer";

const persistConfig = {
    key: "root",
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ["blogs"],
};

const rootReducer = persistReducer(
    persistConfig,
    combineReducers({ blogs: blogsReducer })
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };
