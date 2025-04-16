const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/climate-crisis", (req, res) => {
    res.redirect("https://github.com/dylangiantsfan/Climate-Crisis-Project");
});

app.get("/typesetting", (req, res) => {
    res.redirect("https://github.com/legemu/typesetting");
});

app.get("/four-algorithms", (req, res) => {
    res.redirect("https://github.com/legemu/four-sorting-algo-csc317");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});