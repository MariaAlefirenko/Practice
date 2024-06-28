const convict = require("convict");

convict.addFormat({
  name: "url",
  validate: function (val) {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlRegex.test(val)) {
      throw new Error("Invalid URL format");
    }
  },
  coerce: function (val) {
    return val.trim();
  },
});

const config = convict({
  api: {
    url: {
      doc: "The URL of the API server",
      format: "url",
      default: "http://localhost:3000",
      env: "API_URL",
    },
  },
  proxy: {
    port: {
      doc: "The port to bind the proxy server",
      format: "port",
      default: 3001,
      env: "PROXY_PORT",
    },
  },
});

config.validate({ allowed: "strict" });

module.exports = config;
