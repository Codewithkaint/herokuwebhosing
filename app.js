const express=require('express');
const body=require('body-parser');
const app=express();


const port=process.env.PORT ||3000;
const path=require('path');
const hbs=require('hbs');

const pathss=path.join(__dirname,'views');

app.use('/static',express.static('static'))
app.set('view engine','hbs');
app.set("views",pathss);


app.use(express.static(pathss)); 
app.get('/', (req, res)=>{
   res.status(200).render('index');
 })
app.get('/base', (req, res)=>{
   res.status(200).render('basic');
 })
app.get('/arr', (req, res)=>{
   res.status(200).render('arays');
 })
app.get('/lop', (req, res)=>{
   res.status(200).render('loops');
 })
app.get('/fun', (req, res)=>{
   res.status(200).render('func');
 })
 
 app.listen(port,()=>{
     console.log(`YOUR WEBSITE IS READY TO HOST ${port}`);
 })