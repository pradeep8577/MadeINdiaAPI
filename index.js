const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
const ApiData = require('./data.json');
app.get('/',(req,res)=>{
    console.log('Hello World');
    res.send('Hello World');
});

app.get('/api',(req,res)=>{
    res.send(ApiData);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});