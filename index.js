require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

app.use("/", require("./routes"));
app.use(express.json());
app.use((err, req, res, next) => {
  console.log(err);
  const error = err.name || "Server Error";
  const message = err.message || "Something's wrong";
  const status = err.statusCode || 500;

  res.status(status).json({ error, message });
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});