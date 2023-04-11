const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const bodyparser = require('body-parser');

const configuration = new Configuration({
    apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);


const app = express();
app.use(bodyparser.json());
app.use(cors());

const port = 3080;

app.post('/', async (req, res) => {
    const { message } = req.body;
    console.log(message)
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: `${message}` }],
    });
    console.log(response.data.choices[0].message.content);
    res.json({
        message: response.data.choices[0].message.content
      
    })
})

app.listen(port, () => {
    console.log("Listening on port " + port)
});
