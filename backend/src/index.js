const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use('/', require('./routes/index'));

app.listen(3000, () => {
    console.log('server 3000')
});