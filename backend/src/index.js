const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path')

app.use(cors());

app.use(express.static(path.join(__dirname, '../../frontend/dist')))
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/', require('./router/index'));

app.listen(3000, () => {
    console.log('server 3000')
});