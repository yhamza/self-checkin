const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
const url = process.env.URL || '';
console.log(url);
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(() => console.log('Failed to connect to MongoDB'));

// Routes
 import main from './views/main';
 app.use(main);

// Start server
const port = parseInt(process.env.PORT || '3000', 10);
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
