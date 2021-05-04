const pool = require("./db");


pool.query(`SELECT e.first_name
AS "employee_firstName",  m.first_name
AS "manager_firstName"
FROM employees e
 JOIN employees m
ON e.manager_id  = m.employee_id;`
,(err,result) => {
    try {

        console.log (result.rows);

    }catch(err){
        console.log (err.message);
    }

    });

    pool.end();