const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

module.exports = app;

/*const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const port = 3000;

app.get("/", (req, res) => {
  res.send(process.env.RESPONSE_TEXT);
});

module.exports = app;

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}*/
