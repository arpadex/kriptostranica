const express = require('express')
const app = express()
const port = 3001
const serverless = require('serverless-http');



app.get('/', (req, res) => {
    //send index.html file
    res.sendFile(__dirname + '/../../dist/index.html')
    //send script.js file 

}
)

app.get('/script.js', (req, res) => {
    //send index.html file
    res.sendFile(__dirname + '/script.js')
    res.set('Content-Type', 'application/javascript');

    //send script.js file
});
const router = express.Router();


app.use(express.static('public', {
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.js')) {
            res.set('Content-Type', 'application/javascript');
        }
    }
}));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.use('/.netlify/functions/index', router);  // path must route to lambda
module.exports.handler = serverless(app);