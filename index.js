const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

app.use(cors());

dotenv.config();

const PORT = process.env.PORT;

//middleware
app.use(express.json());

// route middleware
app.use('/api', require('./routes/home'));

app.listen(PORT, async () => console.log('\x1b[31m', `Listening on port ${PORT}...`));
