const pool = require("./db");


pool.query(`SELECT country_name, city,
COUNT(department_id)
FROM countries
 JOIN locations USING (country_id)
 JOIN departments USING (location_id)
 WHERE department_id IN
 (SELECT department_id 
    FROM employees
    GROUP BY department_id
    HAVING COUNT (department_id)>= 2)
GROUP BY country_name,city;`
,(err,result) => {
    try {

        console.log (result.rows);

    }catch(err){
        console.log (err.message);
    }

    });

    pool.end();