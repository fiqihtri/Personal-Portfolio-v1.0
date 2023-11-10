const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // Cannot use [res.render] because were using HTML...
    // Just remove this render if you REALLY wanted to use HTML instead...
    // res.render('index.ejs');
    
    // And this fucking tailwind not even working...
    // I'll just shove the script in the files to make it work for now... [<script src="https://cdn.tailwindcss.com"></script>] HAHAHAHAH

    // This is routing for HTML files. please change the enviroment into your local URLs
    // res.sendFile('CHANGE_THIS_URL_TO_FIT_YOUR_LOCAL/src/index.html');
    // The example of local URLs are stated below:
    res.sendFile('D:/Application/xampp/htdocs/personal/src/index.html');
});

// Access it in localhost:3000 or 127.0.0.1:3000
// To run the app just type 'npm start' in TERMINAL (ctrl+`)
// If you wanted to change the variable to add something in start then change the [package.json in script(start:)]
app.listen(3000);