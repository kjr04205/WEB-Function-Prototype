const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: "******************************",
});

const openai = new OpenAIApi(configuration);

//Image Generate Function
const generateImage = async (req, res) => {
    const { text } = req.body;
    const response = await openai.createImage({
        prompt: text,
        n: 1, // 이미지수
        size: "512x512" // 이미지크기
    });
    const image_url = response.data.data[0].url;
    res.json({ data: image_url });
}

//Home
app.get('/', (req, res) => {
    res.render('index.html');
})

//Image Generator(Post)
app.post('/generate', generateImage);

app.listen(port, () => {
    console.log(`${port} running`);
});