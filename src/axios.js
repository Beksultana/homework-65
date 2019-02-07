import axios from 'axios';

export default axios.create({
    baseURL: "https://burger-project-ls-63.firebaseio.com"
});
