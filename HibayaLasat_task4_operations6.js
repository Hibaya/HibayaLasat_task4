const pool = require("./db");


pool.query(`SELECT  
e.first_name,
e.last_name,
e.salary
FROM employees e
 JOIN employees s
ON e.salary  < s.salary
AND s.employee_id = 182; ;`
,(err,result) => {
    try {

        console.log (result.rows);

    }catch(err){
        console.log (err.message);
    }

    });

    pool.end();