import axios from "axios";
var localhost = "http://localhost:4000";
var heroku = "https://jaco-server.herokuapp.com";
export default axios.create({
  baseURL: localhost,
});
