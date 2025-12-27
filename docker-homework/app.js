const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello from my Docker homework project! My name is Razib Hasan and I am doing my masters degree in University of Helsinki");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
