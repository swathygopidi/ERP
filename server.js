const express=require('express')
const mysql=require('mysql')
const bodyParser=require('body-parser')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"public")));
app.use(cookieParser());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "erp"
  });

  app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","homepage1.html"));

  db.connect(err => {
    if (err) { 
        console.error("Database connection failed" +err.stack);
        return;
    }
    console.log("DB connection OK");
  });
  });

  app.listen(3000,()=>{
    console.log("server running on http://localhost:3000");
  });
  
  