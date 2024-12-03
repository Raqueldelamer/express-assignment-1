import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("hello cats!");
})

app.get("/cats", (req, res) => {
    res.type("json");
    res.send(`{
        "name": "Minou",
        "age": 4
    }`);
});

app.post("/cats", (req, res) => {
    res.type("json");
    res.send(`{
        "name": "Sheba",
        "age": 2
    }`);
});

app.listen(3000, () => {
    console.log("Express server initialized");

});