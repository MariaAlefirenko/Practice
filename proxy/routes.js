const express = require("express");
const router = express.Router();
const service = require("./service");

router.get("/", async (req, res) => {
  try {
    const data = await service.getHelloWorld();
    res.send(data);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
