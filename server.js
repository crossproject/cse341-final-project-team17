const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// Routes
app.use("/", require("./routes/"));

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
