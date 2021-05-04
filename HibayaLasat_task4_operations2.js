const pool = require("./db");


pool.query(`SELECT  
first_name,
last_name,
salary,
job_title
FROM employees e
INNER JOIN jobs j
ON e.job_id = j.job_id  `
,(err,result) => {
    try {

        console.log (result.rows);

    }catch(err){
        console.log (err.message);
    }

    });

    pool.end();