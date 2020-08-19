import * as actionTypes from "../action/type";

const initialState = {
    blogs: [],
    featuredPost: {},
    currentPost: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ALL_POST:
            return { ...state, blogs: action.blogs };
        default:
            return state;
    }
};

export default reducer;
