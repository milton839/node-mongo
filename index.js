const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json())

const users = ['Abana','Babana','Cabana','Dabana','Ebana','Fabana'];

//Get Methods
app.get('/', (req, res) => {
    const product = {
        "fruit":"Kola",
        "price":200
    }
    res.send(product)
});

app.get('/fruits/mango', (req, res) => {
    const product = {"fruit":"mango","price":2000}
    res.send(product)
});

app.get('/users/:id',(req, res)=>{
    const id = req.params.id;
    const userName = users[id];
    res.send({id,userName});
    // console.log(req.query.sort)
});

//Post Methods
app.post('/addUser',(req, res) => {
    const user = (req.body);
    user.id = 55;
    res.send(user);
})

app.listen(3000, ()=>console.log('Port open 3000'))