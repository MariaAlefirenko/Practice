const axios = require("axios");
const config = require("./config");

const apiClient = axios.create({
  baseURL: config.get("api.url"),
});

module.exports = apiClient;
