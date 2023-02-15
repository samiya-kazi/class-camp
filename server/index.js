const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRouter = require('./routers/authRouter');
const assignmentRouter = require('./routers/assignmentRouter');
const classRouter = require('./routers/classRouter');
const instituteRouter = require('./routers/instituteRouter');
const postRouter = require('./routers/postRouter');

require('dotenv').config();
const PORT = process.env.PORT;
const URI = process.env.MONGOOSE_URI;

const app = express();

const corsConfig = {
  origin: 'http://localhost:4200',
  credentials: true,
  exposedHeaders: ['Authorization']
}

app.use(cors(corsConfig));
app.use(express.json());
app.use(authRouter);
app.use(assignmentRouter);
app.use(classRouter);
app.use(instituteRouter);
app.use(postRouter);


(async function bootstrap () {
  try {
    await mongoose.connect(URI);
    console.log('Connected to DB.');
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`))
  } catch (error) {
    console.log(error);
  }
})();