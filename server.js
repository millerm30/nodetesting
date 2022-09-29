const express = require('express');
const app = express();

app.get('/api/helloworld', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});

const path = require("path");
app.use("/", express.static(path.join(__dirname, "public")));

