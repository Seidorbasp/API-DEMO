const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

// routes will go here

app.get('/api/:codigo', function(req, res) {
    const codigo = req.params.codigo;  
    res.send({
      'codigo': codigo
    });
});

app.post('/api', function(req, res) {
    const codigo = req.query.codigo;  
    res.send({
      'codigo': codigo
    });
});

app.listen(port);
console.log('Server started at http://localhost:' + port);