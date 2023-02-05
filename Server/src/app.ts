import express, { Request, Response, NextFunction } from 'express';
import user from './controller/user.controller';
import task from './controller/task.controller';
import bodyParser from 'body-parser';

import http from "http";
import fs  from "fs";

const app = express();

http.createServer(function(request, response){
       
  let filePath = "index.html";
  if(request.url !== "/"){
      // получаем путь после слеша
      filePath = request.url.substring(1);
  }
  fs.readFile(filePath, function(error, data){
             
      if(error){
                 
          response.statusCode = 404;
          response.end("Resourse not found!");
      }   
      else{
          response.end(data);
      }
  });
   
}).listen(3000, function(){
  console.log("Server started at 3000");
});

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(bodyParser.json());

app.use('/user', user);
app.use('/task', task);

app.use(function (error, req: Request, res: Response, next: NextFunction) {
  res.status(500).send(error.message);
});

export default app;
