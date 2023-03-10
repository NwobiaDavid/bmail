const express= require('express');
const bodyParser= require('body-parser');
const ejs = require('ejs');
var _ = require('lodash');
const moment = require('moment');

const dat= require(__dirname+"/date");

const app= express();
const port= 3000;

app.set('view engine', 'ejs');

// app.use('*',express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


const mails= [];

app.get("/",(req,res)=>{
    // let date= dat.getDate();
    const mom= moment().startOf('hour').fromNow();
    res.render('home',{bmail:mails, Date:mom});

})


app.post('/', (req, res) => {
    if(req.body.email || req.body.textarea !== ""){
        let mail={
        mailAddress: req.body.email,
        mailBody: req.body.textarea,
    };
    mails.push(mail);
    res.redirect('/success');
    }else{
        res.redirect('/');
    }
    

})

app.get("/success",(req,res)=>{
    res.render('success');
})

app.get('/compose', (req, res) => {
  res.render('compose');
});


app.get("/bmails/:id",(req,res)=>{
    // let date= dat.getDate();
    const mom= moment().startOf('hour').fromNow();
    mails.forEach((obj)=> {
        let x= _.lowerCase(req.params.id);
        let y= _.lowerCase(obj.mailAddress);
        if (y===x) {
            res.render("mail",{bmail:obj,  Date:mom});
        }
    })

})


app.listen(port,()=>{
    console.log(`listening on port:${port}...`);
})