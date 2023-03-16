let express=require('express');
let app=express();
let port=3000;

app.use(express.static(__dirname+'/www'));
app.use('/js',express.static(__dirname+'/node_modules/bootstrap/dist/js'));
app.use('/js',express.static(__dirname+'/node_modules/jquery/dist'));
app.use('/css',express.static(__dirname+'/node_modules/bootstrap/dist/css'));
app.use('/views',express.static(__dirname +'/views') );//redirect views

app.set( 'view engine' , 'ejs') ;


app.listen(port,()=>{
console.log ('Le serveur est en route');
console.log (`Serveur listening at http://
    localhost:${port}`) ;
})

app.get('/' ,(req,res,next)=>{
    res.render ('index.ejs');
});