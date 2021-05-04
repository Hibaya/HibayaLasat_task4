const pool = require("./db");


pool.query(`SELECT department_name,
CONCAT  (first_name, ' ', last_name) AS "full name"
FROM employees ,departments `
,(err,result) => {
    try {

        console.log (result.rows);

    }catch(err){
        console.log (err.message);
    }

    });

    pool.end();