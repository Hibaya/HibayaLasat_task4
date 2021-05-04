const pool = require("./db");

pool.query('SELECT * FROM "TestPrelim"."GG_customer', (err,result) =>{
    try{
        console.log(result.rows);
    }catch(err){
        console.log(err.message);
    }
    
});
pool.end();