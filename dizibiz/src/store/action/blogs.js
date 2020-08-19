import * as actionTypes from "./type";
import Axios from "../../util/Axios";

export const getAllPosts = () => {
    return (dispatch) => {
        return Axios.get("/blogs")
            .then((result) => {
                dispatch({
                    type: actionTypes.ALL_POST,
                    blogs: result.data,
                });
                return "Successfully fetched all blogs";
            })
            .catch((err) => {
                console.log(err);
                Promise.reject(new Error("Something went wrong"));
            });
    };
};
