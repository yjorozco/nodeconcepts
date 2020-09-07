process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster');
// Is the file being executed in master mode?
if (cluster.isMaster) {
    // Cause index.js to be executed again but
    // in child mode
    cluster.fork();

} else {

    // I am a child, I am going to act like a ser er
    // and do nothing else

    const express = require('express');
    const app = express();
    const crypto =  require('crypto');



    app.get('/', (req, res) => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send('hi there');
        });    
    })

    app.get('/fast', (req, res) => {
        res.send('This was fast');
    })

    app.listen(4000);
}



