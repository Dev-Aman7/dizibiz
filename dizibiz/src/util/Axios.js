import axios from "axios";

const BASE_URL = "https:/dizibytebackend.herokuapp.com";

export default axios.create({
    baseURL: BASE_URL,
});
