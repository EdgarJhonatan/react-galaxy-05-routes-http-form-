import Axios from "axios";

const instance = Axios.create({});

instance.interceptors.response.use((response) => response.data);

export default instance;
