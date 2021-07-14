

var app = require('express')();
        app.get('/',(request,response)=>response.send('Hello, express'));
        app.get('/login',(request,response)=>response.send('Login Page'));
        app.get('/about',(request,response)=>response.send('About Page'));
        app.listen(5020, ()=>console.log('Server running on 5020'));



