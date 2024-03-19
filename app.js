const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.render('form')
});

app.post('/submit', (req,res) => {

    console.log(req.body);

    res.redirect('/');
}
)

app.use(express.urlencoded({ extended: true }));