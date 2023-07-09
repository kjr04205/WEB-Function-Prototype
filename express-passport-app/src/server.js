const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Mongo Atlas
mongoose.connect(`mongodb-uri:`);

const port = 4000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
})