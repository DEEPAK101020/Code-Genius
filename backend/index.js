//
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config()
// console.log(process.env)
console.log(process.env.APIKEY)

const apikey = process.env.APIKEY;
const model = process.env.MODEL;

const OpenAI = require("openai");
const config = {
  // organization: organization,
  apiKey: apikey,
}
const openai = new OpenAI(config);

// create a simple express api that calls the function above
const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.post("/", async (req, res) => {
  const {message} = req.body;
  const response = await openai.chat.completions.create({
    model: model,
    messages: [{ role: 'assistant', content: `${message} `}] ,
  });
  const msgs = await response.choices[0].message.content;
  res.json({
       msgs
  });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});