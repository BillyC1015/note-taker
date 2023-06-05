// this is the basic build out of a server
const express = require('express');
const path = require('path');
let data = require('./db/db.json')
const fs = require('fs')
const PORT = 3022;

const app = express();
// express middleware for compiling JSON data and front end assets
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req,res) =>{
    res.sendFile(path.join(__dirname, '/public/notes.html'))
}
)
app.get('/api/notes',(req,res)=>{
res.json(data)
})
// connects body to server to save titles and text content and assigns random id #s to notes
app.post('/api/notes',(req,res)=>{
    let note = {
        title:req.body.title,
        text:req.body.text,
        id:Math.floor(Math.random()*5000)
    }
    data.push(note)
    fs.writeFileSync('./db/db.json',JSON.stringify(data))
    res.json(data)
    })

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);