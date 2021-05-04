const pool = require("./db");


pool.query(`SELECT department_name,
AVG(salary),
COUNT (commission_pct)
FROM departments 
JOIN employees 
USING (department_id)  
GROUP BY  department_name;`
,(err,result) => {
    try {

        console.log (result.rows);

    }catch(err){
        console.log (err.message);
    }

    });

    pool.end();