import express from "express"

const app = express();

app.get("/", (req, res) => {
    res.json("Hello world");
})

app.listen(8080, () => console.log("Server staerted on port 8080"))
