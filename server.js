var express = require('express');
var weather = require('openweather-apis');
var path=require('path');

// Create an app
var app = express();
const PORT = process.env.PORT || 8000;

weather.setLang('en');
weather.setAPPID("39afc12796a84076e584817de42b34ae");

app.use(express.static('./dist'));
app.get('/',function(req,res){
        res.sendFile(path.resolve(__dirname+"/dist/index.html"));
    });

app.get('/weather',(req,res)=>{
  weather.setCity(req.query.city);
  weather.getAllWeather(function(err, JSONObj){
    console.log(JSONObj);
        if(err){
          res.send(err);
        }
        else{
          res.json(JSONObj);
        }
    });
});

app.listen(PORT, function(){
  console.log('Express server is up on port ' + PORT);
});
