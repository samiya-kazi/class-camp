const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router');

require('dotenv').config();
const PORT = process.env.PORT;
const URI = process.env.MONGOOSE_URI;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

(async function bootstrap () {
  try {
    await mongoose.connect(URI);
    console.log('Connected to DB.');
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`))
  } catch (error) {
    console.log(error);
  }
})();