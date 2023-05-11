const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.get(express.json());


// user: dbuser1;
// pass: tDvCcmv9IxrLa9CN

app.get('/', (req, res)=>{
    res.send('hello i ma running')
});

app.listen(port, ()=>{
    console.log(`port ${port}`)
})