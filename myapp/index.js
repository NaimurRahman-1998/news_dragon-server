const express = require('express')
const app = express()
const port = 5000
var cors = require('cors')


const categories = require('./data/catagories/catagories.json')
const news = require('./data/news/news.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Dragon nEws')
})
app.get('/categories', (req, res) => {
    res.send(categories)
})
app.get('/categories/:id',(req,res)=>{
    const id = req.params.id
    if( id === "0"){
        res.send(news)
    }
    else{
        const selectedCategories = news.filter(n=> n.category_id === id)
        res.send(selectedCategories)
    }
    
})
app.get('/news',(req,res)=>{
    res.send(news)
})
app.get('/news/:id',(req,res)=>{
    const id = req.params.id;
    const selectedNews = news.find(n=>n._id===id);
    res.send(selectedNews)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})