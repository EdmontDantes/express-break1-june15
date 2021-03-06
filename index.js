const express = require('express');
const app = express();

const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const userRouter = require('./routes/userRoutes');

const port = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(`Mongo Error: ${err}`));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded(
        { extended: false }
));
app.use('/api/vi/users', userRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
