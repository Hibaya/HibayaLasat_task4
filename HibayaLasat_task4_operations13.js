const pool = require("./db");


pool.query(`SELECT job_title,
AVG(salary)
FROM employees 
NATURAL JOIN jobs
GROUP BY job_title;`
,(err,result) => {
    try {

        console.log (result.rows);

    }catch(err){
        console.log (err.message);
    }

    });

    pool.end();