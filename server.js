// this is the basic build out of a server
const express = require('express');
const path = require('path');


const PORT = 3001;

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

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);