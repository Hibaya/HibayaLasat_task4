const pool = require("./db");


pool.query(`SELECT  
first_name,
last_name,
department_name,
city,
state_province
FROM employees e
INNER JOIN departments d
ON e.department_id = d.department_id 
INNER JOIN locations l
ON l.location_id = d.location_id 
WHERE first_name LIKE '%z%'`
,(err,result) => {
    try {

        console.log (result.rows);

    }catch(err){
        console.log (err.message);
    }

    });

    pool.end();