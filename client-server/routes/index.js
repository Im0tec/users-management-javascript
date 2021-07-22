module.exports = (app)=>{
    
    app.get('', (req, res) =>{
    
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Aloha</h1>Servidor Rodando...');
        console.log('URL:',req.url);
        console.log('METHOD:',req.method);
    });

}