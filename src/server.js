import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
    res.send("Hello World!!")
});

app.listen(8080, () => {
    console.log("Server is listening on 8080");
});
