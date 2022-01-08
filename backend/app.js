const express = require('express');
const cors = require('cors');
const userRouter = require('./Routes/userRoutes');
const app = express();
const corsOptions = {
  origin: true,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '500kb' }));
app.use('/api/v1/user', userRouter);
module.exports = app;
