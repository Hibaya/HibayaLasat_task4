const pool = require("./db");


pool.query(`SELECT d. department_name
, l.city , l.state_province
FROM departments d
JOIN locations l
ON d.location_id  = d.location_id;`
,(err,result) => {
    try {

        console.log (result.rows);

    }catch(err){
        console.log (err.message);
    }

    });

    pool.end();