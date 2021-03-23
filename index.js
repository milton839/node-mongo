const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Thank You for calling me')
})
app.listen(3000, ()=>console.log('Port open 3000'))