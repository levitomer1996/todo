import axios from "axios";
var localhost = "http://localhost:4000";
var heroku = "https://evening-harbor-31111.herokuapp.com/";
export default axios.create({
  baseURL: localhost,
});
