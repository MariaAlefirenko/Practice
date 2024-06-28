const apiClient = require("./client");

const getHelloWorld = async () => {
  const response = await apiClient.get("/");
  return response.data;
};

module.exports = {
  getHelloWorld,
};
