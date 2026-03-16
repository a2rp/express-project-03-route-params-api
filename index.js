const express = require("express");
const userRoutes = require("./src/routes/user.routes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/", userRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Route Params API is running",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
