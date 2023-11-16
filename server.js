const express = require('express')
const app = express()
const port = process.env.port || 8080
app.listen(port, () => {
    console.log(`listening at port ${port}`)
})
app.use(express.static(__dirname + '/'));

app.get('/', (req, res)=>{
    res.render('index.html');
});

app.get('/addTwoNumbers', (req, res) => {
    res.json({
        status: true,
        sum: Number(req.query.number1) + Number(req.query.number2)
    })
})